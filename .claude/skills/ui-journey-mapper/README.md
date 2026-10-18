# UI Journey Mapper — Claude Code Skill

Framework-adaptive skill for reverse-engineering an existing frontend into visual screen journeys, screen inventories, interaction details, and editable UX exports. Optional source-graph and Sourcegraph workflows are included.

## Install

Copy the `ui-journey-mapper` folder into your repository:

```text
your-repo/
  .claude/
    skills/
      ui-journey-mapper/
        SKILL.md
        references/
        templates/
        examples/
```

You can also place it in your personal Claude Code skills directory to reuse it across repositories. Check the current Claude Code documentation for the personal skills path in your environment.

## Run

In Claude Code:

```text
/ui-journey-mapper
```

Useful follow-ups:
- "Map only the customer onboarding journey."
- "Use the existing source graph or Sourcegraph integration if available."
- "Refresh diagrams after UI changes and preserve existing screen IDs."
- "Try runtime screenshots with the repository's existing browser test setup."
- "Export each major workflow as SVG and draw.io."
- "Show visual journeys first; put code references in a collapsible appendix."

## Example

See `examples/` for a fictional React repository, a sample invocation, a screen inventory, an interaction model, a journey SVG, and a coverage report. The example is source-only and is explicitly not marked runtime-observed.

## Outputs

The skill directs Claude Code to create an HTML portal, canonical JSON models, SVG and draw.io journey diagrams, screenshots where safe and feasible, and a coverage report.

This ZIP contains the reusable workflow instructions, not a completed analysis of a particular repository. Results depend on framework conventions, repository access, runtime availability, test data, and connected integrations. Native Figma frames require an authorized Figma integration or custom plugin; SVG is the portable fallback.
