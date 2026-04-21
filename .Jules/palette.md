## 2025-05-14 - Interactive accessibility for non-semantic elements
**Learning:** In a Tailwind-based React application, making non-semantic elements like `div` cards keyboard-accessible requires not just `tabIndex` and `role`, but also explicit focus-visible ring styles and `group-focus-within` patterns to reveal hover-only controls.
**Action:** Always pair `group-hover` visibility with `group-focus-within` or `focus-visible` on child actions to ensure they are reachable by keyboard users.
