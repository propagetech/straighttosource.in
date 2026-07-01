/**
 * Straight to Source — theme configuration
 *
 * CLIENT SETUP
 * 1. Set PRODUCTION_THEME to the chosen palette ('terracotta' or 'teal').
 * 2. Set ENABLE_THEME_SWITCHER to false once the client has decided (hides the preview UI).
 * 3. To use custom colors, add a new block in css/main.css and a matching key here.
 */
(function () {
  'use strict';

  var PRODUCTION_THEME = 'teal';
  var ENABLE_THEME_SWITCHER = false;
  var STORAGE_KEY = 'sts-theme';

  var THEMES = {
    terracotta: { label: 'Terracotta' },
    teal: { label: 'Teal' }
  };

  var root = document.documentElement;

  function readStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function writeStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      // Storage may be unavailable in private browsing.
    }
  }

  function getActiveTheme() {
    if (ENABLE_THEME_SWITCHER) {
      var stored = readStoredTheme();
      if (stored && THEMES[stored]) {
        return stored;
      }
    }

    return THEMES[PRODUCTION_THEME] ? PRODUCTION_THEME : 'terracotta';
  }

  function applyTheme(theme) {
    if (!THEMES[theme]) {
      theme = 'terracotta';
    }

    root.dataset.theme = theme;

    if (ENABLE_THEME_SWITCHER) {
      writeStoredTheme(theme);
    }

    var switcher = document.getElementById('theme-switcher');
    if (!switcher) {
      return;
    }

    switcher.querySelectorAll('[data-theme-option]').forEach(function (button) {
      var isActive = button.getAttribute('data-theme-option') === theme;
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  applyTheme(getActiveTheme());

  function buildThemeSwitcher() {
    if (!ENABLE_THEME_SWITCHER) {
      return;
    }

    var fieldset = document.createElement('fieldset');
    fieldset.id = 'theme-switcher';
    fieldset.className = 'theme-switcher';
    fieldset.setAttribute('aria-label', 'Accent color preview');

    var legend = document.createElement('legend');
    legend.className = 'theme-switcher__legend';
    legend.textContent = 'Accent';
    fieldset.appendChild(legend);

    Object.keys(THEMES).forEach(function (themeKey) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'theme-switcher__option';
      button.setAttribute('data-theme-option', themeKey);
      button.setAttribute('aria-pressed', root.dataset.theme === themeKey ? 'true' : 'false');
      button.textContent = THEMES[themeKey].label;
      button.addEventListener('click', function () {
        applyTheme(themeKey);
      });
      fieldset.appendChild(button);
    });

    document.body.appendChild(fieldset);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildThemeSwitcher);
  } else {
    buildThemeSwitcher();
  }
})();
