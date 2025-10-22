# Agent Rules

## Icons

- Use only Untitled UI icons

## Styling

- Always fall back to Tailwind utility classes
- Use custom classes with `[]` syntax only if there's no way to do it with existing utility classes
- Never use inline styles with the `style` prop

### Examples:

- ✅ Great: `bg-radial from-bright to-primary ...`
- ⚠️ Acceptable (only if no alternative): `bg-[...]`
- ❌ Never: `style={{background: ...}}`
