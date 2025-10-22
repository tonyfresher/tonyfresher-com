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

## Text and Labels

- All labels, user-facing text, and strings must be defined in a top-level `strings` const above the component
- Never hardcode text directly in JSX
- This keeps all text centralized and easy to update

### Examples:

```typescript
// ✅ Great
const strings = {
    close: 'Close focus mode',
    sizeLabel: '%s MB',
    buttonText: 'Submit'
}

export default function MyComponent() {
    return <button>{strings.buttonText}</button>
}
```

```typescript
// ❌ Never
export default function MyComponent() {
    return <button>Submit</button>
}
```
