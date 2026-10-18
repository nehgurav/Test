# Example invocation

After installing the skill, run:

    /ui-journey-mapper

For a focused example, use this follow-up:

> Analyze the fictional React app under .claude/skills/ui-journey-mapper/examples/sample-repository/. Produce visual-first documentation under ui-documentation/. The primary deliverable must be one unified index.html page, not separate Journeys/Screens tabs or multiple interactive views. Keep the journey map visible and put the selected screen/state details beneath it on the same page; clicking any node or conditional outcome should update those details inline. Include the search results and no-results states, navigation from a result to customer detail, unknown-customer handling, and detail edit/save/cancel states. For each control, show user-visible behaviour and evidence status, then allow an expandable source/handler/service trace. Include business-rule/acceptance cues labelled as inferred if not provided by requirements, and include developer checks and architecture gaps in a collapsible Technical Architecture & Stakeholder Checks section on the same page. Do not generate a separate architecture folder/data-flow SVG or technical-appendix.md by default. Keep screen-layout SVGs and the journey diagram as supplementary assets, not alternate portal views. Do not run commands that install packages or change application files. The sample uses in-memory data only; do not describe it as a backend API. Since runtime access is not established, mark source-supported behaviour as source-confirmed and runtime results as unavailable.

Expected output should broadly match the files under expected-output/. Stable IDs and diagram layout may differ, but evidence status, branch coverage, the single-page interaction pattern, and the distinction between route navigation and in-place state changes should remain consistent.
