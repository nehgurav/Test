# UI Journey Mapper example

This directory contains a fictional React application and illustrative source-analysis outputs. It demonstrates how one unified page can help product, analysis, engineering, and architecture stakeholders understand the same implementation without pretending source inspection is runtime verification.

## Contents

- `input-prompt.md`: example prompt for invoking the skill.
- `sample-repository/`: small fictional React + React Router frontend with in-memory mock data.
- `expected-output/index.html`: **one unified portal page**. The journey map stays visible above the selected screen/state detail. Clicking a node or outcome updates that detail inline; there are no Journeys/Screens tabs or separate in-portal views.
- `expected-output/screens/layouts/`: five individual screen/state layouts: Customer Search with results, Customer Search with no results, Customer Detail, Customer Edit, and Customer Not Found. These are schematic SVG assets, not browser screenshots.
- `expected-output/screens/screens.json`: inventory of five route-level screens and meaningful UI states.
- `expected-output/screens/interaction-model.json`: six stable control/action IDs, outcomes, branches, source references, and shared-start-state metadata where needed.
- `expected-output/journeys/customer-search-to-detail.svg`: standalone portable workflow export; separate asset, not a second portal view.
- `expected-output/architecture/data-flow.svg`: source-confirmed component/data-flow map, with absent production architecture components called out.
- `expected-output/technical-appendix.md`: PO/BA review prompts, developer acceptance scenarios, source mapping, architecture gaps, and evidence boundaries.
- `expected-output/coverage-report.md`: coverage counts, validation status, and limitations.

## Open the example portal

Open `expected-output/index.html`. The journey map and selected screen detail are presented on the same page. Select any journey node/outcome or the inline screen selector; the screen layout, business-rule/acceptance cue, outcomes, evidence status, and expandable implementation trace update in place. The same page links to the technical appendix for deeper analysis.

## How to read the evidence

- **Source-confirmed** means the inspected code clearly establishes the behaviour. It does not mean the behaviour was executed.
- **Inferred** is used for business-purpose interpretation that should be validated by a PO/BA. It must not be mistaken for an approved requirement.
- **Not evidenced / absent from this sample** means the included source does not show that capability; it is not proof that a real target system lacks it.
- The no-results state (`SCR-005`) and not-found state (`SCR-003`) are different states on existing route patterns, not invented routes.
- A shared action can appear on several starting states. The example uses optional `screenIds` while retaining `screenId` as the primary/legacy field.

## Limitations and safety

All names and emails are fictional. The mock service uses an in-memory array and makes no network requests. No browser execution was performed; no runtime screenshot or runtime-observed transition is claimed. JSX has no CSS, so layouts use schematic styling and do not claim pixel accuracy. There is no backend/API/database/auth/audit/deployment architecture implemented in the sample; the technical appendix marks these as gaps rather than guessing.
