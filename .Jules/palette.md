## 2025-05-15 - [Accessibility for Hidden Actions]
**Learning:** Elements that are hidden by default (e.g., `opacity-0`) and only shown on hover (e.g., `group-hover:opacity-100`) are inaccessible to keyboard users unless they are also shown on focus.
**Action:** Use `group-focus-within:opacity-100` on elements containing hidden interactive children to ensure they become visible when any child receives focus. This is essential for features like "Delete" buttons inside cards.
