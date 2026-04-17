# Palette's Journal

This journal records critical UX and accessibility learnings discovered during development.

## 2025-05-15 - Standardizing Accessible Icon Actions
**Learning:** Icon-only buttons in the editor (device preview, section management) lacked identifiers for screen readers and visible focus indicators for keyboard navigation. Additionally, buttons hidden by default (appearing only on hover) were unreachable via keyboard without specific visibility logic.

**Action:**
- Apply `aria-label` and `title` in Spanish to all icon-only buttons for consistent localization.
- Use `focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none` as the standard focus state for interactive elements.
- Implement `group-focus-within:opacity-100` on elements hidden by `opacity-0` to ensure they appear when a child or the group itself receives focus.
