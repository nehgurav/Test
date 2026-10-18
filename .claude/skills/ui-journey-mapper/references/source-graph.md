# Source graph and Sourcegraph adapter

## Purpose

Use an existing source graph or code-intelligence index to accelerate UI discovery. A graph is an aid to navigation and dependency analysis; it does not prove that a user can reach a screen or that a runtime branch succeeds.

## Supported input categories

1. Sourcegraph/code-intelligence integration, if configured and authorized.
2. JSON node/edge exports.
3. GraphML.
4. DOT/Graphviz.
5. Other documented formats, after schema inspection.

Do not assume an export's schema. Inspect a small sample and identify node IDs, node types, file paths, symbols, edge types, and source locations.

## Recommended normalized nodes

- `route`
- `screen`
- `component`
- `control`
- `handler`
- `state`
- `service`
- `api-client`
- `api-operation`
- `model`
- `unknown`

## Recommended normalized edges

- `renders`
- `contains`
- `navigates-to`
- `handles-event`
- `updates-state`
- `calls`
- `requests`
- `handles-response`
- `conditionally-renders`
- `references`
- `unknown`

## Mapping examples

- Route -> page component: likely screen candidate.
- Page component -> child component: layout/content relationship, not necessarily a separate screen.
- Control -> event handler: possible user action.
- Handler -> router/navigation call: candidate transition.
- Handler -> state update: candidate in-place state transition.
- Handler -> API client -> response handler: candidate API-driven branch.
- State/condition -> component render: candidate conditional state/screen.

## Evidence rules

- A graph edge establishes only what the graph's source and semantics support.
- Source code must be inspected when edge meaning is ambiguous.
- Runtime must be used to label a behaviour `runtime-observed`.
- Mark graph-only conclusions `source-confirmed` only when the relevant source has been inspected and clearly supports the claim; otherwise mark `inferred`.
- Preserve graph source, node IDs and file/line metadata in the evidence record.
- Do not use graph labels as user-facing screen names without validating them.

## Sourcegraph

If Sourcegraph is available through a configured connector or user-provided graph export:
1. inspect its available search/navigation actions and query constraints;
2. search route/page definitions and relevant symbols;
3. follow references/callers/callees only along candidate user journeys;
4. retrieve relevant code snippets to confirm relationships;
5. do not assume a particular Sourcegraph API, endpoint, token, or connector exists.

If no Sourcegraph access is configured, continue with the local repository and mention that Sourcegraph was not connected. Never request or write credentials into generated files.
