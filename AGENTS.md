# HorrorHub Agent Notes

## Purpose

HorrorHub is a small React + Vite single-page app about horror content. The current information architecture is split into:

- myths / urban legends
- true crime stories
- Kuplinov horror game content

## Requirements For Working In This Repo

- Node.js with npm available in PATH
- run `npm ci` after clone to install local project dependencies
- use `npm run build` to verify production build
- use `npm run lint` to catch basic code-quality issues
- use a browser pass after UI changes because the project is content- and layout-heavy

## Missing Things Found During Analysis

These were missing when I started:

- local npm dependencies in `node_modules`

Installed on 2026-05-24:

- project dependencies via `npm ci`

## Current State

- `npm run build` passes
- `npm run lint` passes
- `README.md` is still the default Vite template and does not describe the actual project
- the main landing page is responsive and visually aligned with the current Figma design direction
- content pages for myths / true crime / Kuplinov are still lightweight scaffold pages
