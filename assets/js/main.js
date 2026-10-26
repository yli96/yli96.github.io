(function () {
  "use strict";

  // Theme toggle (Editorial Warm Light default, Obsidian Dark optional)
  const root = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (themeBtn) {
        themeBtn.textContent = "Light";
        themeBtn.setAttribute("aria-label", "Switch to light mode");
      }
    } else {
      root.removeAttribute("data-theme");
      if (themeBtn) {
        themeBtn.textContent = "Dark";
        themeBtn.setAttribute("aria-label", "Switch to dark mode");
      }
    }
  }

  let savedTheme = null;
  try {
    savedTheme = window.localStorage.getItem("yl_theme");
  } catch (_) {
    savedTheme = null;
  }
  applyTheme(savedTheme === "dark" ? "dark" : "light");

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      const nextTheme =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      try {
        window.localStorage.setItem("yl_theme", nextTheme);
      } catch (_) {
        // Ignore storage errors in restricted browsing modes
      }
    });
  }

  // Copy email helper (avoids exposing raw mailto to naive scrapers while keeping 1-click UX)
  const emailBtn = document.getElementById("copy-email-btn");
  if (emailBtn) {
    const user = emailBtn.getAttribute("data-u") || "";
    const domain = emailBtn.getAttribute("data-d") || "";
    const addr = user && domain ? user + "@" + domain : "";

    emailBtn.addEventListener("click", function () {
      if (!addr) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addr).then(
          function () {
            const original = emailBtn.textContent;
            emailBtn.textContent = "Copied: " + addr;
            window.setTimeout(function () {
              emailBtn.textContent = original;
            }, 2200);
          },
          function () {
            window.location.href = "mailto:" + addr;
          }
        );
      } else {
        window.location.href = "mailto:" + addr;
      }
    });
  }

  // Publication filtering (Selected vs All vs Topic)
  const filterBtns = Array.from(document.querySelectorAll(".filter-btn"));
  const pubItems = Array.from(document.querySelectorAll(".pub-item"));
  const showAllWrap = document.getElementById("pub-more-wrap");
  const showAllBtn = document.getElementById("pub-more-btn");

  function setFilter(filterKey) {
    filterBtns.forEach(function (btn) {
      const active = btn.getAttribute("data-filter") === filterKey;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    pubItems.forEach(function (item) {
      const tags = (item.getAttribute("data-tags") || "").split(/\s+/);
      const visible = filterKey === "all" || tags.indexOf(filterKey) !== -1;
      if (visible) {
        item.removeAttribute("hidden");
      } else {
        item.setAttribute("hidden", "");
      }
    });

    if (showAllWrap) {
      if (filterKey === "selected") {
        showAllWrap.removeAttribute("hidden");
      } else {
        showAllWrap.setAttribute("hidden", "");
      }
    }
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const key = btn.getAttribute("data-filter") || "selected";
      setFilter(key);
    });
  });

  if (showAllBtn) {
    showAllBtn.addEventListener("click", function () {
      setFilter("all");
    });
  }

  setFilter("selected");
})();
