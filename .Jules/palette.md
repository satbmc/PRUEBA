## 2025-05-14 - Keyboard Visibility for Hover Elements
**Learning:** For elements hidden by default (opacity-0) that appear on hover (group-hover:opacity-100), keyboard users cannot see them when they receive focus unless specific focus-related visibility classes are added.
**Action:** Use `focus-within:opacity-100` on the parent container (if it's interactive) or `focus-visible:opacity-100` on the element itself to ensure visibility during keyboard navigation.

## 2025-05-14 - Interactive Preview Sections
**Learning:** Making entire sections in a preview canvas focusable (`tabIndex={0}`, `role="button"`) allows keyboard users to select and edit them, mirroring the click-to-edit behavior.
**Action:** When converting click-to-edit containers for keyboard accessibility, always add an `onKeyDown` handler for both 'Enter' and 'Space' keys.
