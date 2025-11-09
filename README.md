# Jekyll Theme (GitHub Pages) — Minima

This is a Jekyll site using GitHub Pages' built-in **minima** theme, placed in **/docs** for Option B hosting.

## Publish
1. Create a **public** repo (any name).
2. Upload this **docs/** folder to the repo root.
3. In **Settings → Pages** set **Source = Deploy from a branch**, **Branch = main**, **Folder = /docs**.
4. Visit `https://<username>.github.io/<repo-name>/`.

## Change theme
Edit **docs/_config.yml** and change:
```
theme: minima
```
to one of GitHub Pages' supported themes: `architect, cayman, dinky, hacker, leap-day, merlot, midnight, minimal, modernist, slate, tactile, time-machine`.

> Do **not** add a `.nojekyll` file in /docs — it disables the Jekyll build.
