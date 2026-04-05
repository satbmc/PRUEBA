## 2025-05-15 - [Keyboard Accessibility for Hidden Elements]
**Learning:** Elements hidden by `opacity-0` or similar styles for hover-only interactions remain invisible to keyboard users even when focused, unless specific focus-based visibility classes (`focus-visible:opacity-100`) are added. Additionally, interactive containers using only `onClick` must have `tabIndex`, `role`, and `onKeyDown` to be accessible.
**Action:** Always pair hover-based visibility with `focus-visible` and `focus-within`. Ensure all custom interactive elements have semantic roles and keyboard listeners.

## 2025-05-15 - [Constraint Adherence]
**Learning:** Large file changes like `pnpm-lock.yaml` can easily mask small, high-quality UX improvements and violate strict line-count constraints.
**Action:** Explicitly exclude lockfiles and build artifacts from commits when working on micro-UX tasks.
