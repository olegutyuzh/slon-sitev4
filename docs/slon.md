# Design System Inspired by Slon — In Memoriam

## 1. Visual Theme & Atmosphere

This design system embodies a solemn yet dignified memorial aesthetic, drawing inspiration from the Ukrainian heritage site dedicated to Igor "Slon" Utyuzh. The visual language combines warm, earthy gold tones with deep, dark neutrals to create an atmosphere of reverence and respect. The typography features elegant serif headers paired with clean, modern sans-serif body text, establishing a bridge between classical memorial traditions and contemporary digital presence. The overall mood is introspective and contemplative, using substantial whitespace and carefully calibrated shadows to create depth without distraction. Golden accents serve as focal points and emotional touchstones, guiding users through the narrative while maintaining a solemn, respectful tone throughout.

**Key Characteristics**

- Warm gold and bronze palette evoking dignity and legacy
- Minimal, spacious layout with generous whitespace
- Elegant serif typography for hierarchy and distinction
- Subtle frosted glass effects with low-opacity surfaces
- Deep shadows creating atmospheric depth and focus
- Respectful, contemplative visual language
- Dark backgrounds emphasizing luminous golden accents
- Clean, refined interaction patterns without distraction

## 2. Color Palette & Roles

### Primary

- **Golden Highlight** (`#F2D5A4`): Primary accent color used extensively throughout the design for emphasis, focus states, and decorative elements; creates warmth and prominence in the memorial context
- **Golden Accent** (`#F4C66B`): Secondary golden tone for subtle highlights and interactive state emphasis; complements the primary golden highlight with slightly more saturation

### Accent Colors

- **Bronze Secondary** (`#D6A85F`): Supporting accent for secondary interactive elements and borders; provides warmth with slightly more depth than primary gold
- **Bronze Tertiary** (`#C8A45A`): Tertiary accent for additional layering and subtle background differentiation; creates tonal variation within the warm palette

### Interactive

- **Light Cream Background** (`#F6EFE4`): Primary surface color for light contexts and interactive states; warm neutral base appearing 508 times as the foundational background
- **Glass Border Light** (`#F6EFE4` at 8% opacity): Subtle border treatment for frosted glass card effects; maintains visual hierarchy through transparency
- **Gold Border Glow** (`#F2D5A4` at 60% opacity): Interactive border for primary action buttons; creates luminous focus state
- **Gold Shadow Glow** (`#D6A85F` at 25% opacity): Elevation shadow color for buttons; adds warm depth and visual lift

### Neutral Scale

- **White Pure** (`#FFFFFF`): Maximum contrast element for critical text and smallest details; used sparingly for visual impact
- **Light Gray Secondary** (`#B3B3B3`): Mid-tone neutral for secondary text and borders; provides sufficient contrast without warmth
- **Gray Neutral** (`#888780`): Supporting neutral for tertiary content and dividers; warm-toned gray maintaining design cohesion
- **Dark Gray** (`#B0B0B0`): Alternative neutral for less prominent elements
- **Tan Warm** (`#A8A59A`): Warm neutral bridging gold and gray palette; used for subtle textural elements

### Surface & Borders

- **Deep Black Primary** (`#050608`): Darkest text color and primary foreground; near-pure black with minimal blue undertone
- **Deep Black Secondary** (`#08090B`): Alternative dark text and borders; slight variation for anti-aliasing refinement
- **Deep Black Tertiary** (`#07080A`): Additional dark tone for subtle differentiation in layered backgrounds
- **Deep Black Quaternary** (`#0A1024`): Darkest background tone; contains slight blue undertone for atmospheric depth
- **Deep Black Minimal** (`#0A0A0A`): Pure black alternative for maximum contrast requirements
- **Deep Black Text** (`#090909`): Primary dark text color; near-black with perfect contrast on light backgrounds

### Shadow Colors

- **Dark Shadow Small** (`rgba(0, 0, 0, 0.38)`): Subtle shadow for standard card elevation
- **Dark Shadow Medium** (`rgba(0, 0, 0, 0.4)`): Standard shadow for mid-level elevation
- **Dark Shadow Large** (`rgba(0, 0, 0, 0.45)`): Strong shadow for prominent elevation with layered effect
- **Gold Shadow Accent** (`rgba(214, 168, 95, 0.25)`): Warm shadow for primary interactive elements creating luminous lift

## 3. Typography Rules

### Font Family

**Primary Font: Cormorant Garamond**
Elegant serif typeface for display and heading hierarchy. Evokes classical memorial and heritage aesthetics. Fallback stack: Georgia, serif.

**Secondary Font: Inter**
Clean, modern sans-serif for body content, navigation, and interactive elements. Ensures legibility at all sizes with excellent screen rendering. Fallback stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / H1 | Cormorant Garamond | 57.6px | 700 | 57.6px | 0px | Maximum emphasis, memorial titles |
| Display / H2 | Cormorant Garamond | 86.4px | 500 | 88.128px | 0px | Large heading, primary page title |
| Large Link | Cormorant Garamond | 22px | 600 | 36.3px | 0px | Prominent navigation and featured links |
| Body Text | Inter | 17px | 400 | 28.05px | 0px | Primary content, narrative passages |
| Body Span | Inter | 16px | 400 | 26.4px | 0px | Secondary content, descriptions |
| Navigation | Inter | 14px | 400 | 23.1px | 0px | Menu items, secondary navigation |
| Link Small | Inter | 14px | 400 | 23.1px | 0px | Footer links, tertiary navigation |
| Button | Inter | 13px | 400 | 21.45px | 0px | Call-to-action button text |
| Button Primary | Inter | 15px | 600 | 24.75px | 0px | Emphasized action buttons |

### Principles

- Serif typography (Cormorant Garamond) establishes hierarchy and emotional resonance for primary content
- Sans-serif (Inter) provides clarity and accessibility for supporting content and interactions
- Substantial line-height values (1.5x+ font size) create elegant spacing and enhance readability
- Weight differentiation (700/600/500/400) establishes clear visual hierarchy without relying solely on size
- All text sizes are explicitly pixel-based for precision in memorial context
- Generous line-height supports both aesthetic beauty and accessibility requirements
- Font sizes descend in clear increments to establish logical information architecture

## 4. Component Stylings

### Buttons

#### Primary Action Button

- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `#0A0A0A` (deep black)
- **Font**: Inter, 15px, weight 600
- **Padding**: `18px 44px`
- **Border Radius**: `999px`
- **Border**: `1px solid rgba(242, 213, 164, 0.6)` (golden semi-transparent)
- **Box Shadow**: `rgba(214, 168, 95, 0.25) 0px 8px 24px 0px, rgba(242, 213, 164, 0.2) 0px 0px 0px 1px inset` (warm glow and inner light)
- **Height**: `62.75px`
- **Line Height**: `24.75px`
- **Hover State**: Increase shadow opacity to `rgba(214, 168, 95, 0.35)` and inner border to `rgba(242, 213, 164, 0.3)`
- **Active State**: Darken background to `rgba(0, 0, 0, 0.05)` and increase shadow to `rgba(214, 168, 95, 0.4)`

#### Secondary Action Button

- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `rgba(246, 239, 228, 0.78)` (light cream with slight transparency)
- **Font**: Inter, 14px, weight 500
- **Padding**: `18px 36px`
- **Border Radius**: `999px`
- **Border**: `1px solid rgba(246, 239, 228, 0.18)` (subtle cream border)
- **Box Shadow**: `none`
- **Height**: `61.0938px`
- **Line Height**: `23.1px`
- **Hover State**: Increase border opacity to `rgba(246, 239, 228, 0.3)` and text to `rgba(246, 239, 228, 0.95)`
- **Active State**: Add background `rgba(246, 239, 228, 0.05)` and increase border to `rgba(246, 239, 228, 0.4)`

#### Icon Button

- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `rgba(255, 255, 255, 0.4)` or `rgb(255, 255, 255)` (white with variable opacity)
- **Font**: Inter, 13px, weight 400
- **Padding**: `10px 8px`
- **Border Radius**: `0px` (sharp corners)
- **Border**: `0px none`
- **Box Shadow**: `none`
- **Height**: `44px`
- **Width**: `44px`
- **Line Height**: `21.45px`
- **Hover State**: Increase text color opacity to `rgba(255, 255, 255, 0.8)` on hover
- **Focus State**: Add subtle outline `2px solid rgba(242, 213, 164, 0.5)` with `4px` offset

#### Tertiary Button

- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `#0A0A0A` (deep black)
- **Font**: Inter, 13px, weight 600
- **Padding**: `16px 44px`
- **Border Radius**: `999px`
- **Border**: `1px solid rgba(242, 213, 164, 0.6)` (golden semi-transparent)
- **Box Shadow**: `rgba(214, 168, 95, 0.25) 0px 8px 24px 0px, rgba(242, 213, 164, 0.2) 0px 0px 0px 1px inset` (warm glow)
- **Height**: `55.4375px`
- **Line Height**: `21.45px`
- **Hover State**: Increase shadow to `rgba(214, 168, 95, 0.35) 0px 12px 32px 0px`
- **Active State**: Add background `rgba(242, 213, 164, 0.1)` and inner shadow deepens

### Cards & Containers

#### Frosted Glass Card (Small)

- **Background**: `rgba(255, 255, 255, 0.02)` (near-transparent white)
- **Text Color**: `#F6EFE4` (light cream)
- **Font**: Inter, 16px, weight 400
- **Padding**: `0px` (content padding handled separately)
- **Border Radius**: `30px`
- **Border**: `1px solid rgba(246, 239, 228, 0.08)` (subtle cream border)
- **Box Shadow**: `rgba(0, 0, 0, 0.38) 0px 28px 90px 0px` (standard elevation)
- **Height**: `317.438px` (variable, example provided)
- **Width**: `494.406px` (variable, example provided)
- **Line Height**: `26.4px`
- **Backdrop Filter**: `blur(8px)` (optional frosted glass effect)

#### Frosted Glass Card (Medium)

- **Background**: `rgba(255, 255, 255, 0.02)` (near-transparent white)
- **Text Color**: `#F6EFE4` (light cream)
- **Font**: Inter, 16px, weight 400
- **Padding**: `0px` (content padding handled separately)
- **Border Radius**: `30px`
- **Border**: `1px solid rgba(246, 239, 228, 0.08)` (subtle cream border)
- **Box Shadow**: `rgba(0, 0, 0, 0.38) 0px 28px 90px 0px` (standard elevation)
- **Height**: `357.438px` (variable, example provided)
- **Width**: `494.406px` (variable, example provided)
- **Line Height**: `26.4px`
- **Backdrop Filter**: `blur(8px)` (optional frosted glass effect)

#### Content Container (Large)

- **Background**: `rgba(0, 0, 0, 0)` (fully transparent)
- **Text Color**: `#F6EFE4` (light cream)
- **Font**: Inter, 16px, weight 400
- **Padding**: `48px 48px 48px 48px` (substantial internal spacing)
- **Border Radius**: `28px`
- **Border**: `1px solid rgba(244, 198, 107, 0.14)` (very subtle gold border)
- **Box Shadow**: `rgba(0, 0, 0, 0.4) 0px 28px 90px 0px` (medium elevation)
- **Height**: `390.562px` (variable)
- **Width**: `1052px` (variable, example provided)
- **Line Height**: `26.4px`
- **Overflow**: `hidden` (clip content to border radius)

### Inputs & Forms

#### Text Input

- **Background**: `rgba(255, 255, 255, 0.04)` (very subtle white overlay)
- **Text Color**: `#E6E6E6` (light gray)
- **Font**: Inter, 13px, weight 400
- **Padding**: `10px 14px`
- **Border Radius**: `12px`
- **Border**: `1px solid rgba(230, 230, 230, 0.1)` (very subtle border)
- **Box Shadow**: `none`
- **Height**: `auto` (content-driven, minimum `44px` for touch)
- **Width**: `100%` (full container width)
- **Line Height**: `19.5px`
- **Focus State**: Border changes to `1px solid rgba(242, 213, 164, 0.6)`, background to `rgba(255, 255, 255, 0.06)`, text to `#F6EFE4`
- **Placeholder**: `rgba(230, 230, 230, 0.4)` with font-style italic
- **Error State**: Border to `1px solid rgba(220, 80, 80, 0.6)`, text to `#DC5050`

### Navigation

#### Primary Navigation Menu

- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `#F6EFE4` (light cream)
- **Font**: Inter, 14px, weight 400
- **Padding**: `0px` (margin handled at item level)
- **Border Radius**: `0px` (no rounding)
- **Border**: `0px none` (no border)
- **Box Shadow**: `none`
- **Height**: `23.0938px` (line-height driven)
- **Width**: `329.438px` (variable, example provided)
- **Line Height**: `23.1px`
- **Gap Between Items**: `24px`
- **Active Link**: Text color to `#F2D5A4` (golden highlight)
- **Hover State**: Text color to `#F4C66B` (brighter gold)

### Links

#### Large Featured Link

- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `#F6EFE4` (light cream)
- **Font**: Cormorant Garamond, 22px, weight 600
- **Padding**: `0px` (no padding)
- **Border Radius**: `0px` (no rounding)
- **Border**: `0px none` (no border)
- **Box Shadow**: `none`
- **Height**: `36.2969px`
- **Width**: `147.375px` (variable)
- **Line Height**: `36.3px`
- **Hover State**: Text color to `#F2D5A4` (golden highlight), add underline `2px solid #F2D5A4`
- **Focus State**: Outline `2px solid rgba(242, 213, 164, 0.6)` with `4px` offset

#### Small Navigation Link

- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `rgba(246, 239, 228, 0.66)` (light cream semi-transparent)
- **Font**: Inter, 14px, weight 400
- **Padding**: `0px` (no padding)
- **Border Radius**: `0px` (no rounding)
- **Border**: `0px none` (no border)
- **Box Shadow**: `none`
- **Height**: `23.0938px`
- **Width**: `65.8281px` (variable)
- **Line Height**: `23.1px`
- **Hover State**: Text color to `#F6EFE4` (full opacity), add underline `1px solid rgba(242, 213, 164, 0.6)`
- **Active State**: Text color to `#F2D5A4` (golden highlight)

## 5. Layout Principles

### Spacing System

**Base Unit**: `4px`

**Spacing Scale**:

- `4px` — Micro spacing for inline elements, minimal gaps
- `8px` — Extra-small padding for compact components
- `12px` — Small padding for button internals, tight spacing
- `16px` — Standard padding for small interactive elements
- `20px` — Medium-small padding for moderate spacing
- `24px` — Standard gap between components and list items
- `28px` — Medium padding for component internals
- `32px` — Large padding for section separation
- `36px` — Extra-large margin for major section breaks
- `40px` — Extra-large margin for layout transitions
- `48px` — Large padding for container internals, substantial whitespace
- `56px` — Maximum padding for full-width container spacing

**Usage Context**:

- `4-8px`: Button icon spacing, text to icon proximity
- `12-16px`: Component padding, form field internals
- `20-24px`: Gap between list items, small section spacing
- `28-32px`: Section padding, primary content spacing
- `36-40px`: Major layout breaks, page sections
- `48-56px`: Full-width container padding, memorial sections

### Grid & Container

**Max Width**: `1052px` (from large content container specification)

**Column Strategy**:

- Desktop: 12-column grid with `24px` gutters
- Tablet: 8-column grid with `20px` gutters
- Mobile: Single-column with `16px` margins

**Section Patterns**:

- Hero sections: Full-width with `48px` top/bottom padding
- Content sections: Centered container with `56px` padding
- Card grids: Responsive layout maintaining `24px` gap between cards
- Navigation: Full-width header with center-aligned primary nav, width up to `329px`

### Whitespace Philosophy

This design system prioritizes generous whitespace as a fundamental design principle honoring the memorial's contemplative nature. Substantial padding (`48-56px`) surrounds major content blocks, creating visual breathing room and guiding user focus. Vertical rhythm maintains consistent spacing between elements through the `24px` gap baseline, creating a sense of order and respect. Horizontal margins (`36-40px`) create clear content boundaries without feeling constrictive. The system uses whitespace to separate content hierarchically—more significant separations use larger values (`40-56px`), while related items maintain tighter groupings (`12-24px`). This approach ensures content feels dignified rather than cramped, supporting the memorial's contemplative atmosphere.

### Border Radius Scale

- `0px` — Sharp corners for links, buttons without borders, navigation elements
- `12px` — Input fields and form elements
- `28px` — Large content containers, secondary cards
- `30px` — Standard card border radius, primary frosted glass cards
- `34px` — Alternative card radius for subtle variation
- `999px` / `50%` — Fully rounded buttons, pill-shaped interactive elements

**Component Contexts**:

- Buttons use `999px` (fully rounded) for primary, secondary, and tertiary actions
- Input fields use `12px` for moderate rounding
- Cards use `28-34px` for distinguished but not extreme rounding
- Navigation and links maintain `0px` for structural clarity

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (L0) | No shadow, no elevation | Navigation, text links, icon buttons |
| Subtle (L1) | `rgba(0, 0, 0, 0.38) 0px 28px 90px 0px` | Standard card elevation, secondary containers |
| Standard (L2) | `rgba(0, 0, 0, 0.4) 0px 28px 90px 0px` | Medium-emphasis cards, primary containers |
| Strong (L3) | `rgba(0, 0, 0, 0.45) 0px 12px 32px 0px, rgba(0, 0, 0, 0.3) 0px 4px 12px 0px` | High-emphasis containers, modal backgrounds |
| Luminous (L4) | `rgba(214, 168, 95, 0.25) 0px 8px 24px 0px, rgba(242, 213, 164, 0.2) 0px 0px 0px 1px inset` | Primary action buttons, interactive focus states |

**Shadow Philosophy**:
The elevation system uses warm, dark shadows to create atmospheric depth while maintaining the memorial's solemn aesthetic. Shadows employ `rgba(0, 0, 0, ...)` for general depth, creating separation between layers. The luminous Level 4 shadow introduces golden tones (`rgba(214, 168, 95, ...)`) exclusively for primary interactive elements, drawing attention to call-to-action buttons while maintaining visual hierarchy. The shadow values progress in opacity (`0.38 → 0.4 → 0.45`) to create perceptible depth without overwhelming. Inner glow effects (`inset` borders with `rgba(242, 213, 164, 0.2)`) on primary buttons create a subtle luminosity suggesting interactivity and focus. This approach balances elevation clarity with the contemplative, respectful atmosphere required for memorial content.

## 7. Do's and Don'ts

### Do

- **Use warm gold accents (`#F2D5A4`, `#F4C66B`, `#D6A85F`) strategically** to guide user focus and establish emotional resonance in the memorial context
- **Apply generous whitespace** (`36-56px` margins and padding) around major content sections to create dignified separation and contemplative atmosphere
- **Layer transparency deliberately** using `rgba()` values to create subtle depth and frosted glass effects without obscuring content
- **Maintain serif-first hierarchy** with Cormorant Garamond for primary headings and titles to establish classical memorial aesthetic
- **Use the full `#F6EFE4` light cream background** as your primary surface color for optimal visual consistency
- **Apply `999px` border radius** to all button styles for cohesive, pill-shaped interaction patterns
- **Implement warm shadow elevations** with dark opacity values to maintain atmospheric depth without harsh contrast
- **Provide minimum `44px` height** for all touch-interactive elements (buttons, inputs, links)
- **Use `24px` gaps** between adjacent items in lists, grids, and navigation for consistent spacing rhythm
- **Add golden border accents** (`rgba(242, 213, 164, 0.6)`) to primary buttons for visual lift and interactive affordance

### Don't

- **Don't mix serif and sans-serif** at the same hierarchy level; use Cormorant Garamond exclusively for H1-H2, Inter for body and UI
- **Don't use pure white** (`#FFFFFF`) for body text; prefer `#F6EFE4` or `#E6E6E6` to maintain the warm, contemplative tone
- **Don't apply shadows without purpose**; reserve L3 and L4 shadows for emphasized content and primary actions only
- **Don't create buttons with sharp corners** (`0px` radius); all interactive buttons must use `999px` for design consistency
- **Don't neglect the golden accent palette** in interactive states; hover and focus states should incorporate `#F2D5A4` or `#F4C66B`
- **Don't compress padding below `12px`** on contained elements; this creates visual crowding inappropriate for a memorial
- **Don't apply opacity below `0.6`** to interactive borders; insufficient contrast reduces affordance and accessibility
- **Don't mix elevation levels erratically**; establish clear depth hierarchies with adjacent components
- **Don't use pure black** (`#000000`) anywhere; use `#050608`, `#08090B`, or `#0A0A0A` instead for softer, more respectful aesthetics
- **Don't override border radius on cards below `28px`**; the `28-30px` range provides the optimal visual signature
- **Don't add decorative shadows** to text links; reserve shadows for containers and interactive elements only

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–599px | Single-column layout, `16px` margins, `14px` base font, `20px` spacing, full-width cards |
| Tablet | 600px–1051px | 8-column grid, `20px` gutters, `16px` base font, `24px` spacing, `80%` container width |
| Desktop | 1052px+ | 12-column grid, `24px` gutters, `17px` base font, `48px` spacing, `1052px` max width |

### Touch Targets

**Minimum Sizes**:

- Buttons: `44px` height minimum (all platforms)
- Link hit area: `44px` vertical minimum for standalone links
- Icon buttons: `44x44px` minimum (current specification maintained)
- Input fields: `44px` height minimum for text inputs
- Navigation items: `48px` vertical spacing minimum between items
- Spacing: `8px` minimum margin between adjacent touch targets

### Collapsing Strategy

**Mobile (320px–599px)**:

- Stack all cards vertically, full-width with `16px` margins
- Collapse hero section to single-column with smaller typography (`48px` H1, `64px` H2)
- Convert horizontal navigation to vertical stack or hamburger menu
- Reduce component padding from `48px` to `24px`
- Maintain `24px` gap in lists; reduce to `16px` if space constrained
- Full-width buttons with `18px` padding instead of fixed widths
- Reduce button font to `13px` for compact touch targets

**Tablet (600px–1051px)**:

- 2-column card grids with `20px` gaps
- 50% width container with centered alignment
- Horizontal navigation restoration with wrap support
- Moderate padding `32px` for containers
- Typography maintains hierarchy with slight size reduction (`54px` H1, `72px` H2)
- Button widths increase to `160px` minimum
- Moderate margins `24px` between sections

**Desktop (1052px+)**:

- Full implementation of designed component specifications
- 3-column grids for card layouts
- `1052px` max-width containers with centered alignment
- Full typography hierarchy as specified
- Generous spacing (`36-56px`) between sections
- Fixed-width buttons as designed
- All shadows and elevation effects fully implemented

**Typography Scaling**:

- H1: `57.6px` (desktop) → `48px` (tablet) → `36px` (mobile)
- H2: `86.4px` (desktop) → `64px` (tablet) → `48px` (mobile)
- Body: `17px` (desktop) → `16px` (tablet) → `14px` (mobile)
- Button: `13-15px` (desktop) → `13px` (tablet) → `12px` (mobile)

**Layout Adjustments**:

- Restore full shadow elevations above tablet width
- Reduce shadow opacity (`0.25` instead of `0.38`) on mobile for performance
- Collapse multi-column grids to single column below 600px
- Full-width cards required on mobile; maintain `30px` border radius throughout

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Golden Highlight (`#F2D5A4`)
- **Secondary CTA**: Golden Accent (`#F4C66B`)
- **Background**: Light Cream (`#F6EFE4`)
- **Text Primary**: Deep Black (`#050608`)
- **Text Secondary**: Light Cream (`#F6EFE4`)
- **Accent Border**: Bronze Secondary (`#D6A85F`)
- **Card Surface**: Frosted Glass (`rgba(255, 255, 255, 0.02)`)
- **Input Background**: Subtle Overlay (`rgba(255, 255, 255, 0.04)`)
- **Heading Text**: Deep Black (`#0A0A0A`)
- **Link Text**: Light Cream (`#F6EFE4`)
- **Link Hover**: Golden Highlight (`#F2D5A4`)
- **Button Shadow**: Gold Shadow (`rgba(214, 168, 95, 0.25)`)
- **Card Shadow**: Dark Shadow (`rgba(0, 0, 0, 0.38)`)
- **Border Primary**: Light Cream 8% (`rgba(246, 239, 228, 0.08)`)
- **Border Interactive**: Gold 60% (`rgba(242, 213, 164, 0.6)`)

### Iteration Guide

1. **All buttons must use `999px` border radius** with transparent backgrounds and semi-transparent golden borders (`rgba(242, 213, 164, 0.6)`)

2. **Primary typography uses Cormorant Garamond serif** for headings (H1 57.6px/700, H2 86.4px/500) and Inter sans-serif for body (17px/400) and buttons (13-15px/400-600)

3. **Spacing base unit is `4px`** with primary rhythm at `24px` gaps; containers use `48-56px` padding, sections use `36-40px` margins

4. **All cards implement frosted glass effect**: transparent background, `30px` border radius, `1px solid rgba(246, 239, 228, 0.08)` border, `rgba(0, 0, 0, 0.38)` shadow

5. **Elevation shadow system progresses**: L1 `0.38` opacity, L2 `0.4`, L3 `0.45` for dark shadows; buttons add warm golden glow `rgba(214, 168, 95, 0.25)` with inset light `rgba(242, 213, 164, 0.2)`

6. **Interactive states universally use golden accents**: hover states shift text/borders to `#F2D5A4` or increase opacity, focus states add `2px solid rgba(242, 213, 164, 0.6)` outline

7. **Background is consistently `#F6EFE4`** (light cream) with `#F6EFE4` appearing 508 times; all text on this background uses `#050608` or `#0A0A0A` (deep black) for maximum contrast

8. **Input fields use `rgba(255, 255, 255, 0.04)` background**, `12px` border radius, `1px solid rgba(230, 230, 230, 0.1)` border; focus states shift to golden border `rgba(242, 213, 164, 0.6)` and lighter background

9. **Warm golden palette (`#F2D5A4`, `#F4C66B`, `#D6A85F`, `#C8A45A`) dominates accents and interactive focus**; use bronze tones for secondary emphasis and supporting UI elements

10. **Line height maintains readability at 1.5x+ font size**: H1 57.6px, H2 88.128px, Body 28.05px, preserving elegant vertical rhythm across all text elements

11. **Mobile-first responsive strategy**: single-column at 320px, card stacks with `16px` margins; tablet adds 8-column grid at 600px; desktop uses full 12-column with `1052px` max width and `48-56px` spacing

12. **Every component variant must specify exact CSS values** (background, text color, padding, radius, border, shadow, height, width, line height) for implementation without ambiguity
cop