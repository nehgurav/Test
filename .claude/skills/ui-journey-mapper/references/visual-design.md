# Visual output guidelines

## Keep three visual deliverables separate

1. **Actual screenshot** — captured from a running UI using authorized runtime/browser access. This is the strongest evidence of the actual rendered screen.
2. **Screen layout** — one individual SVG per screen or meaningful UI state. It should visually render the page itself, including the visible structure, controls, content rows, labels, dialogs and state messages.
3. **Journey diagram** — a flowchart of screens/states connected by user actions and decision branches.

Do not use a journey diagram as a substitute for a screen layout. Do not label a source-reconstructed SVG as a screenshot.

## Screen layout conventions

- Create `screens/layouts/SCR-001.svg`, etc. Keep each screen/state separate; avoid putting the entire workflow on one layout canvas.
- Match the actual DOM/component hierarchy and visual order as closely as the evidence permits.
- Include visible headings, form fields, buttons, tabs, navigation, tables/lists, dialogs, empty/loading/error/success states when supported by source.
- Reuse styles, CSS variables, design tokens, and existing design-system components when available.
- If styling or viewport information is missing, use a neutral and clearly labelled wireframe. Record assumptions and set `layoutStatus: source-reconstructed` or `inferred` as appropriate.
- Preserve a stable screen ID and include it in the SVG metadata/title.
- The HTML portal should display the screen preview and link directly to the matching SVG layout.
- Do not fabricate unseen controls, branding, data, or states. Use synthetic data only in examples.

## Journey map conventions

- Rounded rectangle: screen/state node.
- Edge label: user action.
- Diamond: decision/condition.
- Dashed edge: inferred or unverified transition.
- Dialog-shaped node: modal/drawer.
- External marker: external navigation.
- Differentiate route navigation from in-place state change.
- Include a legend and stable screen IDs.
- Split large graphs by workflow; do not create an unreadable hairball.

## Screen detail and evidence

- Use real screenshots where available and record viewport/runtime metadata.
- Number controls only when their positions can be grounded in a screenshot or a captured layout.
- Match the numbered list to the relevant screenshot/layout.
- Describe destination/state and branches in plain language.
- Show evidence status next to each transition.
- Keep code references, source-to-data flow, PO/BA review prompts, developer acceptance checks, and architecture gaps in a collapsible **Technical architecture & stakeholder checks** section on the same HTML page. Do not create a separate architecture folder or technical appendix by default; create separate files only when explicitly requested.

## Export assets

Use meaningful SVG groups, labels and stable IDs. Keep screenshots separate as reference assets. SVG imports are not equivalent to native Figma components or prototype links.
