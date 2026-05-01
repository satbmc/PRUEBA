## 2025-05-22 - Improved Keyboard Accessibility for Section Controls
**Learning:** In visual builder interfaces, hover-only controls (like Delete or Settings) must be made visible on keyboard focus to ensure the app is usable by all. Using Tailwind's `group-focus-within` on parent containers is an effective pattern to reveal these controls without cluttering the UI for mouse users.
**Action:** Always check for `group-hover:opacity-100` patterns and supplement them with `group-focus-within:opacity-100` and ensure the parent container is keyboard-focusable with proper `role` and `tabIndex`.
