## 2026-04-26 - Keyboard Access for Hover-only Actions
**Learning:** Found that critical section management actions (delete, settings) were hidden behind hover states, making them invisible and unreachable for keyboard-only users.
**Action:** Use 'group-focus-within:opacity-100' on parent containers and 'focus-visible:opacity-100' on the interactive elements themselves to ensure they appear when tabbed into, combined with proper focus-visible rings for clear indication.
