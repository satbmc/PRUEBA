## 2025-04-14 - Keyboard Visibility for Hover-Only Elements

**Learning:** In interfaces where destructive or secondary actions (like 'Delete' or 'Settings') are only visible on hover to reduce visual noise, keyboard users lose access to these actions unless they are also made visible on focus. Using Tailwind's `group-focus-within:opacity-100` on the child element combined with `group` on the parent ensures these elements appear when navigated via keyboard.

**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` (or similar visibility classes) for any interactive elements that are hidden by default, and ensure the elements themselves are focusable or reachable within a focusable container.
