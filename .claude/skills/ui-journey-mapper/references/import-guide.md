# Import guide

## Figma
1. Open the target Figma file.
2. Import or drag the SVG onto the canvas.
3. Inspect whether vector elements are individually editable; ungroup where supported.
4. Keep screenshots on a separate reference layer.
5. Use stable IDs such as `SCR-001` and `JRN-001`.

SVG import does not guarantee native frames, auto-layout, reusable components, or prototype links. Those require an authorized Figma integration/API or a custom plugin.

## FigJam
Use an already configured and authorized Figma MCP/API integration to create a native FigJam board. If none exists, use SVG or draw.io.

## diagrams.net / draw.io
Open diagrams.net, choose **File → Import From → Device**, and select the `.drawio` file. Nodes and connectors should be editable.

## HTML portal
Open `ui-documentation/index.html`. If local file restrictions prevent JSON loading, serve the folder using an available local static server, for example `python -m http.server` from that directory.
