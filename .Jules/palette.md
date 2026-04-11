## 2025-05-14 - Interactive Container Accessibility
**Learning:** In a React/Tailwind environment, elements like `div` that are made interactive via `onClick` must also be made keyboard-accessible. Adding `tabIndex={0}`, `role="button"`, and a handler for `Enter`/`Space` keys is essential. Use `focus-visible` to ensure focus indicators only appear for keyboard users.
**Action:** Always include `tabIndex`, `role`, and `onKeyDown` when adding click handlers to non-semantic interactive elements.

## 2025-05-14 - Template Literal Escaping in Git Merge Diffs
**Learning:** When using `replace_with_git_merge_diff`, escaping dollar signs (`\${...\}`) in template literals can lead to literal strings being injected into the code instead of evaluated expressions, causing major UI and accessibility regressions.
**Action:** Be extremely careful with dollar signs in search/replace blocks; they usually should not be escaped if they are part of the target code's template literals.
