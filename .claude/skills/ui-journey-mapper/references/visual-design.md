# Visual output guidelines

## First view priorities

The visual portal should answer:
1. What application is this?
2. Which screens exist?
3. How does a user move between screens?
4. What happens when a control is activated?
5. Which behaviours are verified?

## Journey map conventions

- Rounded rectangle: screen.
- Edge label: user action.
- Diamond: decision/condition.
- Dashed edge: inferred or unverified transition.
- Dialog-shaped node: modal/drawer.
- External marker: external navigation.
- Differentiate route navigation from in-place state change.
- Include a legend and stable screen IDs.
- Split large graphs by workflow; do not create an unreadable hairball.

## Screen detail

- Use real screenshots where available.
- Number controls only when their positions can be grounded in a screenshot.
- Match the numbered list to the screenshot markers.
- Describe destination/state and branches in plain language.
- Show evidence status next to each transition.
- Keep code references in a collapsible technical appendix.

## Export assets

Use meaningful SVG groups, labels and stable IDs. Keep screenshots separate as reference assets. SVG imports are not equivalent to native Figma components or prototype links.
