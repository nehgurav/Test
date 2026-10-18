# Example coverage report

## Summary

- Application: Fictional Customer Admin
- Framework and adapter: React + React Router
- Repository scope: illustrative skill example only
- Graph input: none
- Runtime exploration: unavailable / not performed
- Business context: analyst interpretation only; no approved requirements or domain documentation supplied

## Coverage

- Route patterns identified: 2 application routes plus root redirect
- Screen/state records documented: 5 (including search results-empty state on the same `/customers` route)
- Screens runtime-visited: 0
- Unique controls/actions documented: 6 stable action IDs
- Action transitions documented: 9
- Controls runtime-tested: 0
- Journey flow exports: 1 illustrative SVG
- Individual screen/state layout assets: 5 source-reconstructed SVGs
- Unified interactive portal pages: 1 (`index.html`; no top-level tabs/views)

## Outputs in this example

- [x] One unified HTML page with the journey map and inline selected screen/state details
- [x] Clickable journey nodes/outcomes update the detail section on the same page
- [x] Five individual screen-layout SVG assets, separate from the journey flow SVG
- [x] Screen inventory JSON
- [x] Interaction model JSON with shared starting states for repeated controls
- [x] Journey flow SVG
- [x] Source-to-data-flow summary and architecture gaps embedded in the unified HTML page
- [x] PO/BA review prompts, developer acceptance scenarios, and architect gap list embedded in the unified HTML page
- [x] Coverage report
- [ ] Runtime browser screenshots
- [ ] Runtime-observed transitions
- [ ] Target-application output (this is a fictional example only)
- [ ] Figma-native frames or a validated draw.io application overview

## Evidence quality

The behaviours are labelled source-confirmed because the included source code implements them. Nothing is marked runtime-observed because the sample was not executed in a browser. `SCR-005` is the no-results state on `/customers`, while `SCR-003` is the not-found state on `/customers/:customerId`. A business-intent cue is labelled inferred and must be validated by a PO/BA.

## Limitations

- `customers.js` is an in-memory mock, not a real service or API.
- Save updates in-memory data only; persistence across reloads is not implemented.
- This folder is an instructional reference, not a production-ready UI application.
- No runtime screenshots are included. The HTML portal and five screen-layout SVGs are source-reconstructed mockups; sample JSX has no CSS, so visual styling/dimensions are schematic. The separate journey SVG is a workflow export, not a screenshot or screen layout.
- The unified page’s collapsible technical section calls out the lack of an API, database, auth, audit, and deployment model in the sample; these must not be inferred for a real target without further evidence. No standalone architecture/ directory or technical-appendix.md is part of the default output.

## Safety review

All data is synthetic, with reserved `.test` email addresses. No credentials or production data are present.
