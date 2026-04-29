## 2025-05-14 - Keyboard accessibility for custom interactive containers
**Learning:** This application extensively uses non-semantic `div` and `motion.div` elements as primary interactive cards (templates, sidebar sections). These lack keyboard focus and activation by default.
**Action:** Always implement `tabIndex={0}`, `role="button"`, and an `onKeyDown` handler (Enter/Space) for these custom containers. Use `group-focus-within` on the parent to ensure nested hover-only actions (like "Delete") are reachable and visible to keyboard users.
