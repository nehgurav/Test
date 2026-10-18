# Canonical data model

Keep the model framework-neutral. JSON is the source for the HTML portal, screen layouts, and journey diagrams.

## screens.json

The sample record below shows that actual screenshot evidence and reconstructed layout are separate fields:

```json
{
  "schemaVersion": "1.0",
  "generatedAt": "ISO-8601 timestamp",
  "application": {
    "name": "Detected application",
    "framework": "Detected framework",
    "repositoryScope": ".",
    "graphSource": "none | local-export | Sourcegraph | other"
  },
  "screens": [
    {
      "id": "SCR-001",
      "name": "Customer Search",
      "route": "/customers/search",
      "routePattern": "/customers/search",
      "purpose": "Search for a customer",
      "layout": "MainLayout",
      "entryPoints": [],
      "screenshot": "screenshots/SCR-001.png",
      "layoutAsset": "layouts/SCR-001.svg",
      "layoutStatus": "runtime-captured | source-reconstructed | inferred | unavailable",
      "runtimeStatus": "visited | not-visited | blocked",
      "evidenceStatus": "runtime-observed | source-confirmed | inferred | blocked | unknown",
      "sourceRefs": [{"file": "src/pages/CustomerSearch.tsx", "lines": "1-120"}],
      "graphRefs": [{"source": "local-export", "nodeId": "node-123"}],
      "controlIds": ["ACT-001"]
    }
  ]
}
```

### Meaning of visual fields

- `screenshot`: path to a real screenshot captured from a running application at a documented viewport. Use `null` if no real screenshot is available.
- `layoutAsset`: path to an individual screen-layout asset, usually `screens/layouts/SCR-001.svg`. It depicts the screen itself and is **not** the journey flowchart.
- `layoutStatus`:
  - `runtime-captured`: visual layout was captured from a running UI. Keep the screenshot path too.
  - `source-reconstructed`: layout structure was assembled from source, templates, and any available styles, without claiming a runtime capture.
  - `inferred`: some layout details are inferred due to missing source or styles.
  - `unavailable`: no defensible layout could be created.
- When source styling is missing, explicitly label the layout as schematic; do not imply pixel-level accuracy.

## interaction-model.json

```json
{
  "schemaVersion": "1.0",
  "actions": [
    {
      "id": "ACT-001",
      "screenId": "SCR-001",
      "label": "Search",
      "controlType": "button",
      "action": "Submit search form",
      "handlerRef": {"file": "src/pages/CustomerSearch.tsx", "symbol": "handleSearch"},
      "graphRefs": [{"source": "local-export", "nodeId": "node-456"}],
      "apiRefs": [{"method": "GET", "pathTemplate": "/api/customers"}],
      "transitions": [
        {
          "condition": "matching customers returned",
          "targetScreenId": "SCR-002",
          "targetState": "results populated",
          "transitionType": "state-change",
          "evidenceStatus": "source-confirmed"
        }
      ],
      "evidenceStatus": "source-confirmed",
      "notes": ""
    }
  ]
}
```

### Shared controls and multiple UI states

A control can appear in more than one starting state while retaining the same semantics. In that case, keep one stable action ID and add an optional `screenIds` array listing every applicable starting screen/state. Keep `screenId` as the primary/legacy field for compatibility. If controls have materially different behaviour, model them as separate actions instead of combining them.

Example: a shared “Back to search” link may be rendered by both the customer-detail and not-found states. A Search control may remain visible in both the results and no-results states. Do not make these actions appear to belong to only one starting state.

Meaningful UI states can share one URL/route pattern. Model them as separate screen/state records when they change visible content or available actions (for example, an empty search result or a not-found branch), but do not invent a separate route to distinguish them.

## Evidence statuses

- `runtime-observed`: interaction/outcome was exercised and observed.
- `source-confirmed`: relevant source clearly establishes behaviour, but runtime was not observed.
- `inferred`: plausible but not conclusively established.
- `blocked`: unable to verify due to authentication, unavailable services, inaccessible route, etc.
- `unknown`: insufficient evidence.

## Transition types

`route-navigation`, `state-change`, `modal-open`, `modal-close`, `tab-change`, `external-navigation`, `form-submit`, `unknown`.

## Stable IDs

Use `SCR-001`, `ACT-001`, and `JRN-001`. When refreshing, reuse IDs when route and semantic identity match. Do not renumber everything because one screen was added.
