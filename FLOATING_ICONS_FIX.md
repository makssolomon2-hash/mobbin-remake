# Floating Icons Fix (How it was fixed + how it works)

## What was broken

`imgPositions.forEach(...)` was running, but the icon positions were not changing visually.

## Why it happened

The icons were inside a grid layout, so they were participating in normal document flow.  
Values like `left`, `right`, `top`, and `bottom` only work for positioned elements (`absolute`, `relative`, etc.), not for regular grid flow placement.

## What was changed

1. In `src/components/FloatingIcons.jsx`:
   - Added a `relative` wrapper container.
   - Centered the `<h2>` with absolute positioning.
   - Rendered every icon as `absolute` and initially placed at center (`top-1/2 left-1/2`).
   - GSAP now animates each icon from center to its final coordinates.
2. In `src/constants/index.js`:
   - Replaced mixed `left/right/bottom` values with clear `top + left` coordinates.
   - Added optional `rotate` values for more natural “around the heading” composition.

## Technique used

This is a common **absolute orbit layout** pattern:

1. Create one `position: relative` parent.
2. Place the main title in the center (`absolute` + translate).
3. Place all orbit items as `absolute` elements inside the same parent.
4. Store target coordinates in data (`imgPositions`).
5. Loop through data and apply position via GSAP timeline.

Because all icons are absolutely positioned in one coordinate system, each item can be moved independently and precisely around the heading.

## Minimal mental model

- `relative` parent = local coordinate system.
- `absolute` child = can be moved by `top/left` offsets inside that system.
- GSAP `.to(...)` in a loop = map data coordinates to visual positions.

## How to tune it

- Increase/decrease `left` and `top` percentages in `imgPositions` to move icons.
- Use `rotate` per icon for a less rigid layout.
- Change container height (`h-[600px]`) to control available orbit space.
- Change icon size classes (`h-14 w-14`, `md:h-20 md:w-20`) for responsiveness.
