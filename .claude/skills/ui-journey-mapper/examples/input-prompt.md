# Example invocation

After installing the skill, run:

    /ui-journey-mapper

For a focused example, use this follow-up:

> Analyze the fictional React app under .claude/skills/ui-journey-mapper/examples/sample-repository/. Produce visual-first documentation under ui-documentation/. Include route-level screens, the click from customer search results to customer detail, search results and no-results states, and the detail screen's edit/save/cancel states. Keep source references in the technical appendix. Do not run commands that install packages or change application files. The sample uses in-memory data only; do not describe it as a backend API. Since runtime access is not established, mark source-supported behaviour as source-confirmed and runtime results as unavailable.

Expected output should broadly match the files under expected-output/. Stable IDs and diagram layout may differ, but evidence status, branch coverage, and the distinction between route navigation and in-place state changes should remain consistent.
