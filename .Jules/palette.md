## 2025-05-14 - Accessible Sidebar Section Items
**Learning:** In a visual builder, nesting a "Delete" button inside a clickable "Select" container causes issues for screen readers and keyboard navigation. Using a common container with adjacent semantic buttons ensures correct focus order and clear ARIA labeling.
**Action:** Always use adjacent buttons instead of nested interactive elements for item-level actions in lists. Apply `group-focus-within` to the container to reveal hover-only actions to keyboard users.
