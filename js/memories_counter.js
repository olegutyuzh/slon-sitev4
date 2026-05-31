// ====================================================
// memories_counter.js
// ====================================================
// Завантажує і відображає кількість апрувнутих спогадів
// у рядку "Уже звучить N голосів і горить M свічок".
//
// Слухає realtime-апдейти таблиці memories, щоб число
// оновлювалось без перезавантаження сторінки.
// ====================================================

(function () {

  const counterEl = document.getElementById("memoriesCount");
  if (!counterEl) return;

  // ---- Запит до Supabase ----
  async function loadCount() {
    if (!window.supabaseClient) return null;
    try {
      const { count, error } = await window.supabaseClient
        .from("memories")
        .select("*", { count: "exact", head: true })
        .eq("approved", true);
      if (error) throw error;
      return count || 0;
    } catch (err) {
      console.error("[memories] count failed:", err);
      return null;
    }
  }

  // ---- UI ----
  function setCounter(n) {
    if (n === null || n === undefined) return;
    counterEl.textContent = String(n);
    counterEl.classList.add("is-loaded");
  }

  // ---- Старт ----
  async function init() {
    const count = await loadCount();
    setCounter(count);

    // Realtime — оновлюємо число, коли хтось апрувнув/додав/видалив спогад.
    // Слухаємо всі події, бо approved може мінятись через UPDATE
    // (модерація: false → true).
    if (window.supabaseClient) {
      window.supabaseClient
        .channel("memories-realtime")
        .on("postgres_changes",
            { event: "*", schema: "public", table: "memories" },
            async () => {
              const fresh = await loadCount();
              setCounter(fresh);
            })
        .subscribe();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
