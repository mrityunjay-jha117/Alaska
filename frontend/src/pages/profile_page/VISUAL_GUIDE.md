# 🎨 Profile Page - Visual Guide

## Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│                    PROFILE HEADER                           │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Gradient Background (Indigo → Purple → Pink)      │    │
│  │           ○  ○  (Animated Circles)                 │    │
│  └────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────┐                              ┌─────┬─────┬──┬──┐ │
│  │     │  Rajkumar Singh ✓            │Chat │Map  │⚙│↗│ │
│  │ 👤  │  @rajku_alaska               │Blue │Green│ │ │ │
│  │ ● │  Tech enthusiast | Metro       └─────┴─────┴──┴──┘ │
│  └─────┘  explorer                                         │
└─────────────────────────────────────────────────────────────┘

┌──────────────────── STATS CARDS ───────────────────────────┐
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐      │
│  │ ⚡ 127  │  │ 📈 2450 │  │ 📍 Rajiv│  │ 📅 Jan  │      │
│  │ Trips   │  │   km    │  │  Chowk  │  │  2024   │      │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘      │
└─────────────────────────────────────────────────────────────┘

┌──── USER INFO ────┐  ┌───────── RECENT TRIPS ────────────┐
│ 📧 EMAIL          │  │ 🚇 Recent Trips       View All →  │
│ ✓ Verified        │  │                                   │
│                   │  │ ┌──────────────────────────────┐  │
│ 🛡️ 2FA           │  │ │ 📍 Rajiv → ... → 📍 Civil    │  │
│ ✓ Active          │  │ │ ⏰ 9:30 AM  🚇 12km  3 stops │  │
│                   │  │ └──────────────────────────────┘  │
│ ℹ️ ABOUT          │  │                                   │
│ Metro explorer 🚇 │  │ ┌──────────────────────────────┐  │
│                   │  │ │ 📍 CP → ... → 📍 Barakhamba  │  │
│                   │  │ │ ⏰ 2:20 PM  🚇 8km   3 stops  │  │
└───────────────────┘  │ └──────────────────────────────┘  │
                       └───────────────────────────────────┘
```

---

## Component Breakdown

### 1. Profile Header

```
┌─────────────────────────────────────────────────────┐
│ ╔═══════════════════════════════════════════════╗  │
│ ║   GRADIENT BACKGROUND                         ║  │
│ ║   (Indigo 600 → Purple 600 → Pink 500)        ║  │
│ ║                                               ║  │
│ ║   Animated Circles (Pulsing)                  ║  │
│ ║        ○              ○                       ║  │
│ ╚═══════════════════════════════════════════════╝  │
│                                                     │
│ ┌─────────┐                                         │
│ │         │                                         │
│ │   👤    │  Rajkumar Singh ✓ (Verified Badge)     │
│ │    ●    │  @rajku_alaska                          │
│ └─────────┘  Tech enthusiast | Metro explorer       │
│   Avatar                                            │
│  (Online)                                           │
│                                                     │
│                         ┌──────────┬──────────┐    │
│                         │ 💬 Chat  │ 🗺️ Map  │    │
│                         │  Blue    │  Green   │    │
│                         └──────────┴──────────┘    │
│                         ┌────┬────┐                │
│                         │ ⚙️ │ 🚪 │                │
│                         └────┴────┘                │
└─────────────────────────────────────────────────────┘
```

### 2. Stats Cards

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │
│ │  ⚡     │ │  │ │  📈     │ │  │ │  📍     │ │  │ │  📅     │ │
│ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │
│             │  │             │  │             │  │             │
│ Total Trips │  │  Distance   │  │  Favorite   │  │ Member Since│
│    127      │  │  2,450 km   │  │ Rajiv Chowk │  │  Jan 2024   │
│             │  │             │  │             │  │             │
│ Yellow      │  │   Green     │  │    Blue     │  │   Purple    │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
```

### 3. User Info Card

```
┌───────────────────────────────────┐
│ 📧 Account Information            │
├───────────────────────────────────┤
│                                   │
│ ┌──────────────────────────────┐ │
│ │ 📧  Email Address            │ │
│ │     rajku@alaska.com         │ │
│ │                   ✓ Verified │ │
│ └──────────────────────────────┘ │
│                                   │
│ ┌──────────────────────────────┐ │
│ │ 🛡️  Two-Factor Auth          │ │
│ │     Enabled                  │ │
│ │                   ✓ Active   │ │
│ └──────────────────────────────┘ │
│                                   │
│ ┌──────────────────────────────┐ │
│ │ ℹ️  About                    │ │
│ │ Passionate traveler exploring│ │
│ │ Delhi Metro 🚇               │ │
│ └──────────────────────────────┘ │
└───────────────────────────────────┘
```

### 4. Recent Trips Card

```
┌─────────────────────────────────────────────┐
│ 🚇 Recent Trips             View All →     │
├─────────────────────────────────────────────┤
│                                             │
│ ┌─────────────────────────────────────────┐│
│ │ 📍 Rajiv Chowk  ··· →  📍 Civil Lines  ││
│ │                                         ││
│ │ ⏰ 9:30 AM  🚇 12 km  📊 3 stations    ││
│ │                          Today          ││
│ └─────────────────────────────────────────┘│
│                                             │
│ ┌─────────────────────────────────────────┐│
│ │ 📍 Connaught   ··· →  📍 Barakhamba    ││
│ │                                         ││
│ │ ⏰ 2:20 PM  🚇 8 km   📊 3 stations    ││
│ │                       Yesterday         ││
│ └─────────────────────────────────────────┘│
│                                             │
│ ┌─────────────────────────────────────────┐│
│ │ 📍 Hauz Khas   ··· →  📍 INA           ││
│ │                                         ││
│ │ ⏰ 8:15 AM  🚇 15 km  📊 4 stations    ││
│ │                       3 days ago        ││
│ └─────────────────────────────────────────┘│
└─────────────────────────────────────────────┘
```

---

## Color Scheme

### Primary Gradients

```
Indigo → Purple
██████████ from-indigo-500 to-purple-600

Blue → Blue
██████████ from-blue-500 to-blue-600

Green → Emerald
██████████ from-green-500 to-emerald-600

Purple → Pink
██████████ from-purple-500 to-pink-600
```

### Status Colors

```
✓ Success (Green)
██████████ bg-green-100, text-green-700

⚠ Warning (Yellow)
██████████ bg-yellow-100, text-yellow-700

✗ Error (Red)
██████████ bg-red-100, text-red-700

ℹ Info (Blue)
██████████ bg-blue-100, text-blue-700
```

---

## Animation Flow

### Page Load Sequence

```
1. ┌─────────────┐
   │   Header    │ ← Fade In (0.6s)
   └─────────────┘

2. ┌───┐ ┌───┐ ┌───┐ ┌───┐
   │ 1 │ │ 2 │ │ 3 │ │ 4 │ ← Fade In Up (staggered)
   └───┘ └───┘ └───┘ └───┘
   0ms   100ms 200ms 300ms

3. ┌─────────┐  ┌──────────────┐
   │  Info   │  │    Trips     │ ← Fade In Up
   └─────────┘  └──────────────┘

4.              ┌──────────────┐
                │   Trip 1     │ ← Slide In Right (0ms)
                └──────────────┘
                ┌──────────────┐
                │   Trip 2     │ ← Slide In Right (100ms)
                └──────────────┘
                ┌──────────────┐
                │   Trip 3     │ ← Slide In Right (200ms)
                └──────────────┘
```

### Hover Effects

```
Cards:
Normal → Hover
┌─────┐   ┌─────┐
│     │   │  ↑  │ (Lift up 8px)
│     │ → │     │ (Scale 1.05)
└─────┘   └─────┘ (Shadow increase)

Buttons:
Normal → Hover
[Button] → [Button↗] (Scale 1.05, Bounce icon)

Icons:
⚙️ → ⚙️ (Rotate 90°)
🚪 → 🚪→ (Slide right)
```

---

## Responsive Breakpoints

### Mobile (< 640px)

```
┌──────────────────┐
│     Header       │
├──────────────────┤
│ ┌──────────────┐ │
│ │   Stat 1     │ │
│ └──────────────┘ │
│ ┌──────────────┐ │
│ │   Stat 2     │ │
│ └──────────────┘ │
│ ┌──────────────┐ │
│ │   Info       │ │
│ └──────────────┘ │
│ ┌──────────────┐ │
│ │   Trips      │ │
│ └──────────────┘ │
└──────────────────┘
   Single column
```

### Tablet (640px - 1024px)

```
┌────────────────────────────┐
│         Header             │
├────────────────────────────┤
│ ┌──────┐ ┌──────┐         │
│ │Stat 1│ │Stat 2│         │
│ └──────┘ └──────┘         │
│ ┌──────┐ ┌──────┐         │
│ │Stat 3│ │Stat 4│         │
│ └──────┘ └──────┘         │
├────────────────────────────┤
│ ┌──────┐                  │
│ │ Info │                  │
│ └──────┘                  │
│ ┌─────────────────────┐   │
│ │      Trips          │   │
│ └─────────────────────┘   │
└────────────────────────────┘
    2-column stats
```

### Desktop (> 1024px)

```
┌──────────────────────────────────────────┐
│              Header                      │
├──────────────────────────────────────────┤
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐           │
│ │St 1│ │St 2│ │St 3│ │St 4│           │
│ └────┘ └────┘ └────┘ └────┘           │
├──────────────────────────────────────────┤
│ ┌────────┐  ┌─────────────────────────┐│
│ │  Info  │  │        Trips            ││
│ │        │  │                         ││
│ │        │  │                         ││
│ └────────┘  └─────────────────────────┘│
└──────────────────────────────────────────┘
   4-column stats, 1:2 layout below
```

---

## Icon Reference

### Header Icons

- 👤 **Avatar**: User profile picture
- ● **Online**: Green dot indicator
- ✓ **Verified**: Blue checkmark badge
- 💬 **Chat**: MessageCircle icon
- 🗺️ **Map**: Map icon
- ⚙️ **Settings**: Settings icon
- 🚪 **Logout**: LogOut icon

### Stats Icons

- ⚡ **Trips**: Zap icon (yellow)
- 📈 **Distance**: TrendingUp icon (green)
- 📍 **Station**: MapPin icon (blue)
- 📅 **Member**: Calendar icon (purple)

### Info Icons

- 📧 **Email**: Mail icon
- 🛡️ **Security**: Shield icon
- ✓ **Check**: CheckCircle icon
- ✗ **Cross**: XCircle icon

### Trip Icons

- 🚇 **Train**: Train icon
- ⏰ **Time**: Clock icon
- 📍 **Location**: MapPin icon
- → **Arrow**: ArrowRight icon

---

## Button States

### Chat Button

```
Normal:     [💬 Chat]  (Blue gradient)
Hover:      [💬↗Chat]  (Darker blue, scale 1.05)
Active:     [💬 Chat]  (Pressed effect)
```

### Map Button

```
Normal:     [🗺️ Map]   (Green gradient)
Hover:      [🗺️↗Map]   (Darker green, scale 1.05)
Active:     [🗺️ Map]   (Pressed effect)
```

### Settings Button

```
Normal:     [⚙️]       (Gray)
Hover:      [⚙️↻]      (Rotate 90°, gray-200)
Active:     [⚙️]       (Pressed)
```

### Logout Button

```
Normal:     [🚪]       (Red-50)
Hover:      [🚪→]      (Slide right, red-100)
Active:     [🚪]       (Pressed)
```

---

## Visual Hierarchy

```
Level 1: Profile Header (Largest, most prominent)
         ████████████████████████████████

Level 2: Section Headers (Large, bold)
         ██████████████

Level 3: Stats Cards (Medium, eye-catching)
         ████████

Level 4: Content Cards (Standard size)
         ██████

Level 5: Detail Text (Smaller, secondary)
         ████
```

---

**This visual guide shows the complete design structure! 🎨**
