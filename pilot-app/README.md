# React + TypeScript + Vite

## Tracking plan import conventions

- Treat each Word tracking plan's named page or product area as one product area. Workbook tabs are source sections, not product areas.
- Keep home page event type controls as local filters of the event list; “View all” clears them.
- Build each event's JSON specification from its workbook classification, page ID, placement, and event property rows. Use `null` for values the source does not supply, and distinguish the specification from an observed trace.
- Map page impressions to their listed `Moduledtl` IDs, click events to their listed `sid` or named placement group, and resolve module names through the registered module ID. Keep separate rows when an event has multiple placements.
- Show the event lifecycle as Proposed, Reviewed, Implemented, Validated. Keep a dated change history only when source dates exist; otherwise show “Not recorded”. The current stage owners are Vivek Samuel, Roopa Penmetsa, Priyanka Gala, and Vivek Samuel respectively.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
