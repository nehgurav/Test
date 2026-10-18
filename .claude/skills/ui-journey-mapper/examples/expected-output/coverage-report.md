# Example coverage report

## Summary
- Application: Fictional Customer Admin
- Framework and adapter: React + React Router
- Repository scope: skill example only
- Graph input: none
- Runtime exploration: unavailable / not performed

## Coverage
- Route patterns identified: 2 application routes plus root redirect
- Screen/state records documented: 3
- Screens runtime-visited: 0
- Controls/actions documented: 6
- Controls runtime-tested: 0
- Journeys generated: 1 illustrative SVG

## Outputs in this example
- [x] Interactive HTML screen gallery with reconstructed layouts
- [x] Four individual screen-layout SVG assets, separate from the journey flow SVG
- [x] Screen inventory JSON
- [x] Interaction model JSON
- [x] One illustrative journey SVG
- [x] Coverage report
- [ ] Full generated portal for a target app (this folder contains a small illustrative HTML gallery only)
- [ ] Application overview draw.io
- [ ] Screenshots from a running browser
- [ ] Runtime-observed transitions

## Evidence quality
The behaviours are labelled source-confirmed because the included source code implements them. Nothing is marked runtime-observed because the sample was not executed in a browser. The unknown-customer branch is a state on /customers/:customerId, not a separate URL.

## Limitations
- customers.js is an in-memory mock, not a real service or API.
- Save updates in-memory data only; persistence across reloads is not implemented.
- This folder is an instructional reference, not a production-ready UI application.
- No runtime screenshots are included. The HTML gallery and four screen-layout SVGs are source-reconstructed mockups; sample JSX has no CSS, so visual styling/dimensions are schematic. The separate journey SVG is a flow diagram only.

## Safety review
All data is synthetic, with reserved .test email addresses. No credentials or production data are present.
