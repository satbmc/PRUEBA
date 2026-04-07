## 2025-05-14 - [Accessibility] Handling Nested Interactivity and Generic ARIA Labels

**Learning:** When creating accessible "card" components or list items that are themselves interactive (e.g., using `role="button"` and `onKeyDown`), any nested interactive elements (like a "Delete" button) must explicitly stop event propagation for *both* click and keyboard events. Failing to stop `onKeyDown` propagation will cause the parent's keyboard handler to trigger even when the child is focused and activated. Additionally, list-based actions (like Delete) should always include the item's name in their `aria-label` to provide unique context for screen reader users in the "buttons list" view.

**Action:**
1. Use `e.stopPropagation()` in both `onClick` and `onKeyDown` for nested interactive elements.
2. Ensure `aria-label` for repeated actions includes dynamic item-specific text: `aria-label={\`Eliminar sección: \${sectionName}\`}`.
3. Always verify focus visibility with `focus-visible` utilities when elements are hidden by default on hover.
