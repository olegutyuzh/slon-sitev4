# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static memorial website for Ihor "Slon" Utyuzh (1996–2023), a Ukrainian defender. Pure HTML/CSS/Vanilla JS — no frontend framework. Multilingual (Ukrainian default + English) with a Supabase backend for the memories guestbook.

## Build Commands

```bash
npm run build     # Full build: minify CSS/JS, bundle, inline critical CSS
npm run minify    # Same as build
npm run inline    # Only re-run critical CSS inlining (inline-critical.js)
```

The build pipeline (via `build.sh`) does:

1. Minifies each CSS file → `css/min/*.min.css`
2. Minifies each JS file → `js/min/*.min.js`
3. Bundles shared CSS → `css/min/common.bundle.min.css` and `css/min/index.bundle.min.css`
4. Bundles shared JS → `js/min/common.bundle.min.js`
5. Inlines critical CSS in all HTML files and defers non-critical CSS (via `beasties`)

**Local dev:** Use VS Code Live Server extension — no dev server command exists.

## Architecture

### File structure

- `*.html` — 9 top-level pages + `stories/*.html` (4 subpages)
- `css/` — 17 per-page/component stylesheets; `css/min/` holds minified + bundled output
- `js/` — ~19 JS modules; `js/min/` holds minified + bundled output
- `i18n.json` — All UI strings for both languages (large file, ~107 KB)
- `memories.json` — Static snapshot of guestbook entries (supplemented by Supabase)
- `build.sh` + `inline-critical.js` — Build tooling

### Language system

`js/lang.js` loads `i18n.json` and swaps DOM text by `data-i18n` attribute keys. Language is stored in `localStorage`. Every user-visible string must have an entry in both `uk` and `en` sections of `i18n.json`.

### Supabase integration

`js/supabase-config.js` holds the client config. `js/memories.js` fetches and renders guestbook entries from Supabase; `js/memory-new.js` handles submissions. The `memories.json` file is a static fallback/cache, not the source of truth.

### CSS/JS loading pattern

HTML files reference the **minified bundle** paths (e.g., `css/min/common.bundle.min.css`). During development you edit source files in `css/` and `js/`; after editing, run `npm run build` to regenerate minified/bundled output before testing the final HTML.

### Service worker

`js/service-worker.js` is registered on the main pages for PWA/offline support. Cache strategy changes must be reflected there.

## Key constraints

- No build-time templating — shared markup (nav, footer) is duplicated across HTML files. When changing shared UI, update every relevant HTML file.
- The `inline-critical.js` script modifies HTML in-place; run it after any CSS changes that affect above-the-fold rendering.
- Dev dependencies: `clean-css-cli`, `terser`, `beasties`. Do not add runtime npm dependencies — the site ships zero JS framework overhead intentionally.
