# UI Journey Mapper example

This directory contains a small fictional React application and representative output from a source-only analysis. It demonstrates the expected level of detail without needing access to a real customer application.

## Contents

- input-prompt.md: a sample prompt to invoke the skill.
- sample-repository/: a tiny illustrative frontend to analyze.
- expected-output/index.html: self-contained interactive screen gallery with reconstructed Customer Search, Customer Detail, and Not Found layouts.
- expected-output/screens/screens.json: inventory of route-level screens and states.
- expected-output/screens/interaction-model.json: control-by-control outcomes and branches.
- expected-output/journeys/customer-search-to-detail.svg: a sample visual journey.
- expected-output/coverage-report.md: example caveats and evidence accounting.

## Safe-use notes

- All names and data are fictional.
- The sample service uses in-memory mock data. It does not call a real API.
- The expected results are illustrative, not a claim that the sample was run in a browser.
- index.html contains hand-built HTML/CSS layouts based on the sample source. It is not a captured screenshot and is not evidence of pixel-perfect runtime fidelity.
- Findings are marked source-confirmed because the source is inspectable, but not runtime-observed.
- Use the real repository's source and available runtime evidence for actual documentation. Do not copy the sample's screen names or outcomes into another project.
