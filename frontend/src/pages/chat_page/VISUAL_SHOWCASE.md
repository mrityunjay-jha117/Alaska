# 🎨 Visual Showcase

## Chat Interface Preview

### Desktop View

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌──────────────────────┬──────────────────────────────────────────────┐  │
│  │  🗨️ Chats      [+]   │  [👤] Alice Johnson    🟢 Online  [📞] [⋮] │  │
│  ├──────────────────────┼──────────────────────────────────────────────┤  │
│  │  [🔍] Search...      │                                              │  │
│  ├──────────────────────┤            ──── Today ────                   │  │
│  │ 🟢 [👤] Alice      5m │                                              │  │
│  │    Hey! How are... ② │     ┌──────────────────────┐                │  │
│  ├──────────────────────┤     │ Hey! How are you?    │  10:30 AM      │  │
│  │    [👤] Bob        2h │     └──────────────────────┘                │  │
│  │    Thanks for...     │                                              │  │
│  ├──────────────────────┤                    ┌──────────────────┐      │  │
│  │ 🟢 [👤] Carol     1d │     11:45 AM  I'm great! │            │ ✓✓   │  │
│  │    Can we...     ⑤  │                    └──────────────────┘      │  │
│  ├──────────────────────┤                                              │  │
│  │    [👤] David     3d │     ┌──────────────────────┐                │  │
│  │    See you...        │     │ That's awesome! 🎉   │  11:50 AM      │  │
│  ├──────────────────────┤     └──────────────────────┘                │  │
│  │ 🟢 [👤] Emma      7d │                                              │  │
│  │    That sounds...  ① │  ─────────────────────────────────────────  │  │
│  └──────────────────────┤  [😊] [📎]  Type a message...        [➤]  │  │
│                          └──────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Mobile View - Chat List

```
┌──────────────────────────┐
│  🗨️ Chats         [+]    │
├──────────────────────────┤
│  [🔍] Search chats...    │
├──────────────────────────┤
│  🟢 [👤] Alice       5m ②│
│      Hey! How are...     │
├──────────────────────────┤
│     [👤] Bob        2h   │
│      Thanks for...       │
├──────────────────────────┤
│  🟢 [👤] Carol      1d ⑤│
│      Can we...           │
├──────────────────────────┤
│     [👤] David      3d   │
│      See you...          │
├──────────────────────────┤
│  🟢 [👤] Emma       7d ① │
│      That sounds...      │
└──────────────────────────┘
     ↓ Tap to open ↓
```

### Mobile View - Chat Window

```
┌──────────────────────────┐
│ [←] Alice 🟢  [📞] [⋮]  │
├──────────────────────────┤
│                          │
│      ──── Today ────     │
│                          │
│  ┌──────────────┐        │
│  │ Hey! How     │  10:30 │
│  │ are you?     │        │
│  └──────────────┘        │
│                          │
│          ┌──────────┐    │
│   11:45  │ I'm      │ ✓✓ │
│          │ great!   │    │
│          └──────────┘    │
│                          │
│  ┌──────────────┐        │
│  │ That's       │  11:50 │
│  │ awesome! 🎉  │        │
│  └──────────────┘        │
│                          │
├──────────────────────────┤
│ [😊] [📎] Type...  [➤] │
└──────────────────────────┘
```

## Color Palette

### Primary Colors

```
🎨 Indigo 500:   #6366F1  ███████
🎨 Purple 600:   #9333EA  ███████
🎨 Green 500:    #10B981  ███████
🎨 Blue 500:     #3B82F6  ███████
```

### Background Colors

```
⬜ White:        #FFFFFF  ███████
⬜ Gray 50:      #F9FAFB  ███████
⬜ Gray 100:     #F3F4F6  ███████
⬜ Gray 200:     #E5E7EB  ███████
```

### Text Colors

```
⬛ Gray 900:     #111827  ███████
⬛ Gray 700:     #374151  ███████
⬛ Gray 500:     #6B7280  ███████
⬛ Gray 400:     #9CA3AF  ███████
```

## Component States

### Chat List Item States

#### Default

```
┌────────────────────────────┐
│  [👤] Bob Smith       2h   │
│      Thanks for your help  │
└────────────────────────────┘
```

#### Active (Selected)

```
┃ ┌──────────────────────────┐
┃ │🟣 [👤] Alice        5m  ②│
┃ │      Hey! How are...     │
┃ └──────────────────────────┘
```

#### Unread

```
┌────────────────────────────┐
│ 🟢 [👤] Carol       1d   ⑤│
│      Can we schedule...    │
└────────────────────────────┘
```

#### Typing

```
┌────────────────────────────┐
│ 🟢 [👤] Emma        now    │
│      Typing...             │
└────────────────────────────┘
```

### Message States

#### Sent (✓)

```
            ┌────────────┐
  12:30 PM  │ Message    │ ✓
            └────────────┘
```

#### Delivered (✓✓)

```
            ┌────────────┐
  12:30 PM  │ Message    │ ✓✓
            └────────────┘
```

#### Read (✓✓ in blue)

```
            ┌────────────┐
  12:30 PM  │ Message    │ 🔵✓✓
            └────────────┘
```

## Interactive Elements

### Buttons

#### Primary Button (Send)

```
Normal:   [ ➤ ]  (Red gradient)
Hover:    [ ➤ ]  (Larger + shadow)
Disabled: [ ➤ ]  (Gray)
```

#### Icon Buttons

```
Normal:   [ 😊 ]  (Gray)
Hover:    [ 😊 ]  (Indigo + background)
```

### Input Field

#### Normal State

```
┌─────────────────────────────────┐
│ Type a message...               │
└─────────────────────────────────┘
```

#### Focused State

```
┌─────────────────────────────────┐
│ Hello!|                         │
└─────────────────────────────────┘
  (Blue ring outline)
```

#### With Text

```
┌─────────────────────────────────┐
│ Hey there! How are you doing?   │
└─────────────────────────────────┘
```

### Search Input

```
┌──────────────────────────┐
│ 🔍 Search chats...       │
└──────────────────────────┘
```

## Animations

### Typing Indicator

```
┌────────────┐
│  ⚫ ⚫ ⚫  │  → Bouncing dots
└────────────┘
```

### Loading State

```
  ⟳  Spinning circle
```

### Hover Transitions

```
Item: Slide in background (300ms)
Button: Scale up (200ms)
Color: Smooth transition (150ms)
```

## Status Indicators

### Online

```
[👤] ← 🟢 Green dot
```

### Offline

```
[👤]    Last seen 2h ago
```

### Away

```
[👤] ← 🟡 Yellow dot
```

## Date Dividers

```
┌────────────────────────┐
│    ─── Today ───       │
└────────────────────────┘

┌────────────────────────┐
│   ─── Yesterday ───    │
└────────────────────────┘

┌────────────────────────┐
│ ─── January 15 ───     │
└────────────────────────┘
```

## Empty States

### No Chat Selected

```
┌─────────────────────────┐
│                         │
│         💬              │
│                         │
│  Welcome to Alaska Chat │
│                         │
│  Select a chat to start │
│     messaging...        │
│                         │
│    🔒 End-to-end       │
│       encrypted         │
│                         │
└─────────────────────────┘
```

### No Search Results

```
┌─────────────────────────┐
│                         │
│         🔍              │
│                         │
│    No chats found       │
│                         │
└─────────────────────────┘
```

## Gradient Showcase

### Header Gradient

```
🎨 ═══════════════════════
   Indigo → Purple
   Left to Right
```

### Message Gradient (Sent)

```
🎨 ┌─────────────┐
   │ Message     │
   │ Indigo→Purp │
   └─────────────┘
```

### Background Gradient

```
🎨 ╔═══════════════════╗
   ║  Gray 50 → White  ║
   ║  Top to Bottom    ║
   ╚═══════════════════╝
```

## Responsive Breakpoints

### Mobile (< 768px)

```
┌────────┐
│ Single │
│ Column │
│ Toggle │
│ View   │
└────────┘
```

### Desktop (≥ 768px)

```
┌─────────┬──────────┐
│  Sidebar│  Chat    │
│  384px  │  Fluid   │
└─────────┴──────────┘
```

## Typography Scale

```
Heading:   text-2xl (24px)  ███
Subhead:   text-xl  (20px)  ██
Body:      text-base (16px) █
Small:     text-sm  (14px)  ▓
Tiny:      text-xs  (12px)  ░
```

## Shadows & Effects

### Box Shadow

```
┌──────────┐
│   Item   │  ← Shadow: md
└──────────┘
   └─ ─ ─┘
```

### Blur Effect (Background)

```
Original → ▓▓▓▓▓▓▓▓ (Blurred)
```

### Hover Glow

```
Normal:  [Button]
Hover:   [Button]  ← Glowing shadow
```

---

## Quick Visual Reference

| Element   | Color      | Size  | Animation |
| --------- | ---------- | ----- | --------- |
| 🟢 Online | Green 500  | 12px  | None      |
| ⓶ Badge   | Indigo 500 | 20px+ | None      |
| ✓ Sent    | Gray 400   | 16px  | None      |
| ✓✓ Read   | Blue 500   | 16px  | None      |
| 💬 Empty  | Indigo 500 | 128px | None      |
| ⚫ Typing | Gray 400   | 8px   | Bounce    |

---

**This visual guide helps maintain design consistency across the chat interface! 🎨**
