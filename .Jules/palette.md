## 2025-05-14 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons in the editor (Monitor, Tablet, Smartphone) lacked descriptive labels for screen readers and visual tooltips, making them less intuitive and inaccessible.
**Action:** Always add `aria-label` and `title` to icon-only buttons. Use Tailwind's `focus-visible` utility to ensure focus indicators are visible when navigating via keyboard.
