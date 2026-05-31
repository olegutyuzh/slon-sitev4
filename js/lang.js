// Підтримувані мови
const SUPPORTED_LANGS = ["uk", "en"];
const DEFAULT_LANG = "uk";

function normalizeLang(lang) {
  if (!lang) return DEFAULT_LANG;

  const short = lang.toLowerCase().split("-")[0];

  if (short === "ua") return "uk";
  if (SUPPORTED_LANGS.includes(short)) return short;

  return DEFAULT_LANG;
}

function getDeviceLang() {
  const langs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  const matched = langs
    .map(normalizeLang)
    .find(lang => SUPPORTED_LANGS.includes(lang));

  return matched || DEFAULT_LANG;
}

const urlLang = new URLSearchParams(location.search).get("lang");
const savedLang = localStorage.getItem("lang");

let currentLang = urlLang
  ? normalizeLang(urlLang)
  : savedLang
    ? normalizeLang(savedLang)
    : getDeviceLang();

// Кеш перекладів по набору джерел (ключ — список файлів через "|")
let translationsCache = {};

if (urlLang) {
  localStorage.setItem("lang", currentLang);
}

function setLanguage(lang) {
  currentLang = normalizeLang(lang);
  localStorage.setItem("lang", currentLang);
  applyTranslations();
  updateActiveButtons();
}

function updateActiveButtons() {
    // Підтримуємо як data-lang="ua", так і data-lang="uk"
    document.querySelectorAll("[data-lang]").forEach(btn => {
        const btnLang = normalizeLang(btn.dataset.lang);
        const isActive = btnLang === currentLang;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
}

// Які файли перекладів вантажити.
// /i18n.json — завжди (спільні переклади сайту).
// Додаткові файли вказуються на сторінці через атрибут data-i18n-src
// на <html> або <body>. Можна кілька через кому:
//   <html data-i18n-src="/stories_i18n.json">
//   <body data-i18n-src="/stories_i18n.json, /faq_i18n.json">
function getTranslationSrcs() {
    const extra = document.documentElement.getAttribute("data-i18n-src")
        || document.body.getAttribute("data-i18n-src");

    const srcs = ["/i18n.json"];
    if (extra) {
        extra.split(",")
            .map(s => s.trim())
            .filter(Boolean)
            .forEach(s => srcs.push(s));
    }
    return srcs;
}

// Зливаємо словники по мовах.
// parts — масив об'єктів виду { uk: {...}, en: {...} }.
// Пізніші файли перекривають ранніші при збігу ключів
// (тобто додаткові файли > /i18n.json).
function mergeTranslations(parts) {
    const merged = {};
    for (const part of parts) {
        if (!part) continue;
        for (const lang of Object.keys(part)) {
            merged[lang] = Object.assign(merged[lang] || {}, part[lang]);
        }
    }
    return merged;
}

function applyTranslations() {
    const srcs = getTranslationSrcs();
    const cacheKey = srcs.join("|");

    const render = (data) => {
        const dict = data[currentLang] || data[DEFAULT_LANG] || {};

        // Текстовий вміст: <h1 data-i18n="key">...</h1>
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        // HTML-вміст: <p data-i18n-html="key">...</p>
        // Використовується для перекладів, що містять HTML-теги (<em>, <strong>, <br> тощо).
        // Сюди можна вставляти тільки переклади з власних i18n-файлів — НЕ дані від користувачів.
        document.querySelectorAll("[data-i18n-html]").forEach(el => {
            const key = el.getAttribute("data-i18n-html");
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Placeholder для input/textarea: data-i18n-placeholder="key"
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (dict[key] !== undefined) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        // Title (тултипи): data-i18n-title="key"
        document.querySelectorAll("[data-i18n-title]").forEach(el => {
            const key = el.getAttribute("data-i18n-title");
            if (dict[key] !== undefined) {
                el.setAttribute("title", dict[key]);
            }
        });

        // Alt для зображень: data-i18n-alt="key"
        document.querySelectorAll("[data-i18n-alt]").forEach(el => {
            const key = el.getAttribute("data-i18n-alt");
            if (dict[key] !== undefined) {
                el.setAttribute("alt", dict[key]);
            }
        });

        // Aria-label: data-i18n-aria-label="key"
        document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
            const key = el.getAttribute("data-i18n-aria-label");
            if (dict[key] !== undefined) {
                el.setAttribute("aria-label", dict[key]);
            }
        });

        // Двомовний контент (для блогу): <span data-lang-content="uk">...</span>
        // Показуємо тільки той блок, що відповідає поточній мові.
        // Використовується там, де контент зберігається не в i18n-файлах,
        // а прямо в HTML двома мовами одразу (наприклад, статті блогу).
        document.querySelectorAll("[data-lang-content]").forEach(el => {
            const elLang = normalizeLang(el.getAttribute("data-lang-content"));
            if (elLang === currentLang) {
                // Прибираємо inline-стиль зовсім, щоб НЕ перемогло CSS-правило
                // [data-lang-content="en"] { display: none } у blog.css
                el.style.removeProperty("display");
                // Підказка браузеру: для надійності задаємо клас замість inline-style.
                // CSS нижче (.lang-visible) має пріоритет над загальним правилом.
                el.classList.add("lang-visible");
            } else {
                el.style.display = "none";
                el.classList.remove("lang-visible");
            }
        });

        // Оновлюємо <html lang="...">
        document.documentElement.setAttribute("lang", currentLang);
    };

    if (translationsCache[cacheKey]) {
        render(translationsCache[cacheKey]);
        return;
    }

    Promise.all(
        srcs.map(src =>
            fetch(src)
                .then(res => {
                    if (!res.ok) throw new Error("Failed to load " + src + ": " + res.status);
                    return res.json();
                })
        )
    )
        .then(parts => {
            const merged = mergeTranslations(parts);
            translationsCache[cacheKey] = merged;
            window.translationsCache = merged; // експорт для інших скриптів (напр. memory-new.html)
            render(merged);
        })
        .catch(err => console.error("[i18n]", err));
}

document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
    updateActiveButtons();

    // Вішаємо обробники на всі кнопки з data-lang
    document.querySelectorAll("[data-lang]").forEach(btn => {
        btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
});
