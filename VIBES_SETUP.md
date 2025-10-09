# Vibe Selector - Quick Setup Guide

The vibe selector feature has been successfully added to your site! 🎵

## What's Included

A floating button (bottom-left on desktop, top-right on mobile) that opens a menu to select different "vibes" - ambient experiences with visual overlays and soundtracks.

## File Structure

```
src/
├── components/vibes/
│   ├── index.tsx           # Main provider (manages state & audio)
│   ├── vibe-selector.tsx   # Button & menu UI
│   ├── vibe-overlay.tsx    # Visual overlays (rain, halo, etc.)
│   ├── config.ts           # Vibe configuration (customize here!)
│   └── README.md           # Detailed customization guide
├── types/
│   └── vibes.ts            # TypeScript type definitions
public/sounds/              # Place your audio files here
```

## Current Vibes (Stubs)

1. **Thursday Evening** - Rain overlay with thunder sounds
2. **Guided Meditation** - Purple halo with affirmations
3. **No Vibe** - Turn off vibes

## Quick Start: Adding Your Audio

1. **Add audio files** to `/public/sounds/`:
    - `rain-thunder.mp3`
    - `meditation-affirmations.mp3`

2. **Test it**: Click the floating button → select a vibe

That's it! The audio will play automatically (if files exist).

## Customization Guide

### Adding a New Vibe

Edit `src/components/vibes/config.ts`:

```typescript
{
    id: 'coffee-shop',
    name: 'Coffee Shop',
    description: 'Cozy cafe atmosphere',
    overlay: {
        type: 'custom', // or use 'rain', 'halo'
        config: {}
    },
    sound: {
        src: '/sounds/coffee-shop-ambient.mp3',
        volume: 0.4,
        loop: true
    }
}
```

### Creating Custom Overlays

1. Add your overlay type to the `Vibe` interface
2. Create a component in `vibe-overlay.tsx`
3. Add it to the switch statement

See `src/components/vibes/README.md` for detailed instructions.

## Styling

The vibe selector uses your existing design system:

- CSS variables from `global.css`
- Tailwind utility classes
- Responsive breakpoints

### Button Positioning

Default:

- Desktop: bottom-left (14 units from edges)
- Mobile: top-right (6 units from edges)

To change, edit classes in `src/components/vibes/vibe-selector.tsx`.

## Features

- ✅ Click-outside to close menu
- ✅ Audio autoplay with error handling
- ✅ Visual ring indicator when active
- ✅ Responsive positioning
- ✅ Smooth transitions
- ✅ Easy to extend

## Next Steps

1. Add your audio files to `/public/sounds/`
2. Customize existing vibes or add new ones in `src/types/vibes.ts`
3. Create custom overlays in `vibe-overlay.tsx` if needed
4. Adjust button positioning/styling if desired

For detailed customization options, see:
📖 `src/components/vibes/README.md`

## Tips

- Keep audio files under 5MB for performance
- Use MP3 format at 128kbps for ambient sounds
- Test overlays on mobile devices
- Consider adding localStorage to persist user's selection

Enjoy your new vibe selector! 🎶✨
