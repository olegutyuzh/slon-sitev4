#!/usr/bin/env node
/**
 * inline-critical.js
 * Вбудовує критичний CSS inline у кожен HTML-файл і відкладає решту CSS,
 * а також робить Google Fonts асинхронними (media="print" трюк).
 *
 * Запуск: node inline-critical.js
 * Працює "на місці" — змінює HTML-файли в корені проєкту.
 */

const fs = require('fs');
const path = require('path');
const Beasties = require('beasties');

const ROOT = __dirname;

// HTML-файли, які треба обробити (корінь + підпапка stories/)
const HTML_FILES = [
  'index.html',
  'biography.html',
  'recognition.html',
  'stories.html',
  'memories.html',
  'fragments.html',
  'contact.html',
  'memory-map.html',
  'football.html',
  'memory-new.html',
  'stories/den-narodzhenia.html',
  'stories/concert-zhadana.html',
  'stories/football.html',
  'stories/memorialna-doshka-shkola.html',
];

// Робить <link rel="stylesheet" href="...fonts.googleapis..."> асинхронним.
// Чіпає ТІЛЬКИ лінки зі stylesheet — preconnect/preload лишаються незмінними.
function deferGoogleFonts(html) {
  return html.replace(
    /<link\b[^>]*>/gi,
    (tag) => {
      // Лише лінки на стилі Google Fonts
      const isFontStylesheet =
        /href="https:\/\/fonts\.googleapis\.com\/css/i.test(tag) &&
        /rel\s*=\s*"stylesheet"/i.test(tag);
      if (!isFontStylesheet) return tag;
      // Якщо вже відкладений — не чіпаємо
      if (/media\s*=\s*"print"/i.test(tag)) return tag;

      // Витягуємо href
      const hrefMatch = tag.match(/href="([^"]*)"/i);
      if (!hrefMatch) return tag;
      const href = hrefMatch[1];

      return (
        `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'">` +
        `\n<noscript><link rel="stylesheet" href="${href}"></noscript>`
      );
    }
  );
}

async function run() {
  let ok = 0;
  let skipped = 0;

  for (const rel of HTML_FILES) {
    const file = path.join(ROOT, rel);
    if (!fs.existsSync(file)) {
      console.log(`  ✗ ${rel} — не знайдено, пропускаю`);
      skipped++;
      continue;
    }

    let html = fs.readFileSync(file, 'utf8');

    // beasties окремо на кожен файл (різні набори CSS на кожній сторінці)
    const beasties = new Beasties({
      path: ROOT,          // звідки шукати CSS-файли (href="/css/...")
      publicPath: '/',     // як трактувати абсолютні шляхи у href
      preload: 'swap',     // решту CSS вантажити асинхронно
      pruneSource: false,  // не чіпати оригінальні .css файли
      reduceInlineStyles: false,
      logLevel: 'silent',
    });

    try {
      html = await beasties.process(html);
    } catch (e) {
      console.log(`  ✗ ${rel} — помилка beasties: ${e.message}`);
      skipped++;
      continue;
    }

    // Шрифти робимо асинхронними після обробки
    html = deferGoogleFonts(html);

    fs.writeFileSync(file, html, 'utf8');
    console.log(`  ✓ ${rel}`);
    ok++;
  }

  console.log(`\nГотово: оброблено ${ok}, пропущено ${skipped}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
