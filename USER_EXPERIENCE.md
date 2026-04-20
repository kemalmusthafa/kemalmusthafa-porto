<!-- USER_EXPERIENCE.md -->

# 👤 User Experience Guide

This guide explains what users will see and experience when they visit your portfolio.

## 📱 First Page Load

### 1. Preloader (1-3 seconds)

**What the user sees:**

- Full-screen overlay with dark background
- Animated counter: 0% → 100%
- Progress bar filling smoothly
- Text: "Loading..."

**What's happening:**

- Portfolio assets are loading
- Animations are being prepared
- Fonts are fetching from Google Fonts

### 2. Hero Section (Full Screen)

**What the user sees:**

- **Name**: "KEMAL MUSTHAFA RAJABI"
  - Each letter appears with staggered slide-up animation
  - Electric yellow accent color (#E8FF00)
  - Premium dark background with subtle glow
  - Cinematic title card feel

- **Subtitle**: Three lines of text animating in
  - Job titles: "Software Engineer · Full Stack Developer"
  - Location: "Jakarta, Indonesia"
  - Parallax effect as user scrolls

- **Scroll Indicator**: Animated arrow at bottom
  - Moving up and down continuously
  - Text: "SCROLL TO EXPLORE ↓"
  - Encourages user to scroll down

- **Custom Cursor**: Small dot with ring
  - Small yellow dot at exact cursor position
  - Larger ring orbiting around cursor
  - Follows smoothly with slight lag

---

## 📜 Scrolling Experience

### Smooth Scroll (Lenis)

**Feel:**

- Butter-smooth scrolling (like luxury car)
- Slightly slower than default browser scroll
- Easing creates cinematic feel
- No jarring or stuttering

### Parallax Backgrounds

**What happens:**

- Text and elements move at different speeds
- Creates depth illusion
- Subtle backgrounds shift as you scroll
- Premium visual effect

---

## 🔝 Navigation Bar

### Fixed Navbar (at top)

**Initial state (hero section):**

- Flush black background
- Just logo "KMR" in yellow
- Navigation links visible

**On scroll (after 50px):**

- Blurred dark background appears
- Subtle border-bottom animation
- Smooth transition (not jarring)

**Navigation Links (Desktop):**

- About | Experience | Work | Contact
- Small subtle underline on hover
- Yellow accent line appears
- Active section has yellow dot indicator

**Mobile:**

- Logo visible
- Hamburger menu (three lines)
- Click to reveal full-screen overlay menu
- Links appear with staggered animation

---

## 🎯 Section-by-Section Breakdown

### 01 — ABOUT (Full Screen)

**Layout:**

- Left side: Large section label "01 — ABOUT"
- Center: Full portfolio description
  - Words fade in one at a time
  - Professional yet readable text
  - Engaging paragraph about expertise

- Right side: Two statistics cards
  - "5+" Years Experience
  - "10+" Projects Delivered
  - Numbers count up when section enters view
  - Left accent border

**Feeling:** Professional, impressive credentials

---

### 02 — EXPERIENCE (Full Screen)

**Layout:**

- "02 — EXPERIENCE" header
- Full-width timeline of jobs
- Each job is a clickable row

**Each Job Row Shows:**

- Index number (01, 02, 03...)
- Company name & position
- Date range on right
- Hover: Row background darkens, number highlights

**Click to Expand:**

- Smooth height animation
- 3 bullet points reveal
- Describes achievements in that role
- Click again to collapse

**Order:** Most recent jobs first

**Feeling:** Organized, impressive career progression

---

### 03 — SKILLS (Partial Width)

**Layout:**

- "03 — SKILLS" header
- Three rows of skill pills

**Row 1: Languages & Frameworks**

- Pills scroll LEFT infinitely
- Laravel, MySQL, Next.js, React, etc.
- Repeats seamlessly

**Row 2: Systems & Methodologies**

- Pills scroll RIGHT infinitely
- FMS, ERP, Project Management
- Opposite direction for visual interest

**Row 3: Tools & Practices**

- Pills scroll LEFT again
- UI/UX Analysis, Git, Agile

**Interaction:**

- Hover on skill: Enlarges slightly
- Background fills with accent color
- Creates interactive feel

**Feeling:** Comprehensive skill set, modern tech stack

---

### 04 — WORK (Full Screen)

**Layout:**

- "04 — WORK" header
- Numbered project cards (01, 02, 03)

**Each Card Shows:**

- Project name (large, bold)
- Your role (yellow text)
- Project description
- Tech stack (chips/badges)
- 2-3 key achievements
- "VIEW →" button

**Hover Interaction:**

- Card lifts up smoothly
- Subtle shadow appears
- Border accent intensifies
- Button text highlights

**Feeling:** Impressive portfolio of completed work

---

### 05 — EDUCATION (Dull Background Section)

**Layout:**

- "05 — EDUCATION" header
- Two cards side by side (responsive)

**Each Card Shows:**

- Date badge (yellow background)
- Degree name
- Institution name
- GPA/Final Score (bold yellow text)

**Cards:**

1. Bachelor of Computer Science
   - Universitas Jenderal Achmad Yani
   - GPA: 3.06 / 4.00

2. Fullstack Web Developer Bootcamp
   - Purwadhika
   - Score: 88.5 / 100

**Feeling:** Academic credentials, completed education

---

### 06 — ACHIEVEMENTS (Dull Background Section)

**Layout:**

- "06 — ACHIEVEMENTS" header
- 2×2 responsive grid (4 items)

**Each Achievement Shows:**

- Icon (Award, BookOpen, Globe, Users)
- Title (TOEFL, Published, Languages, Organization)
- Value (473, Journal, ID/EN, PCESI)

**Responsive:**

- 2 columns on desktop
- 2 columns on tablet
- 2 columns on mobile (stacked)

**Hover:** Cards enlarge and lift up

**Feeling:** Diverse accomplishments and certifications

---

### 07 — CONTACT (Full Screen)

**Layout:**

- HUGE heading: "LET'S WORK TOGETHER"
- Each word animates in
- Text size: ~8-10vw (responsive)

**Contact Grid (4 items):**

1. **Email**
   - Icon + label + email
   - Clickable (opens mail app)
   - On hover, text highlights yellow

2. **Phone**
   - Icon + label + phone
   - Clickable (calls on mobile)
   - On hover, text highlights yellow

3. **Location**
   - Icon + label + Jakarta, Indonesia
   - Shows professional location

4. **LinkedIn**
   - Icon + label + "Connect"
   - Opens LinkedIn profile
   - On hover, text highlights yellow

**Big CTA Button:**

- "Start a Project"
- Border and text in yellow accent
- Hover: Fills with yellow, text turns dark
- Links to email

**Background:**

- Subtle glowing gradient effect
- Similar to hero section
- Pulses gently

**Footer:**

- "© 2026 Kemal Musthafa Rajabi"
- "Built with Next.js & Framer Motion"
- Small, subtle text

**Feeling:** Clear call-to-action, easy to contact

---

## 🎮 Interactive Elements

### Buttons

- Hover: Color changes to accent yellow
- Click: Visual feedback (slight scale)
- Smooth transitions (0.3s)

### Links

- Normal: White text
- Hover: Yellow text with underline
- Active: Yellow dot indicator (nav)
- External links: Open in new tab

### Cards

- Normal: Transparent background
- Hover: Slightly darker background
- Animation: Smooth lift-up effect

### Skill Pills

- Normal: Outlined style, yellow border
- Hover: Filled with yellow, scale up
- Smooth expansion

### Expandable Rows (Experience)

- Normal: Collapsed, border visible
- Hover: Background darkens
- Click: Smooth expansion with details
- Second click: Collapses

---

## 🎨 Visual Consistency

### Color Usage

- **Dark Background** (#0A0A0A): Main, calm
- **Yellow Accent** (#E8FF00): Highlights, CTA, importance
- **Gray Text** (#888888): Secondary info
- **White Text** (#F5F5F5): Primary content
- **Dark Borders** (#222222): Subtle divisions

### Typography

- **Headings**: Large, bold, geometric (Space Grotesk)
- **Body**: Regular weight, readable (Inter)
- **Labels**: Small, uppercase, tracked (professional)

### Spacing

- Generous whitespace
- Breathing room between sections
- Consistent padding/margins
- Asymmetric but balanced layout

---

## 📱 Mobile Experience

### Adjustments

- **Text**: Smaller but readable (clamp functions)
- **Spacing**: Reduced padding on mobile
- **Grid**: Single column instead of multi-column
- **Navigation**: Full-screen overlay menu
- **Animations**: Slightly faster (less CPU intensive)

### Touch Interactions

- Larger touch targets (44x44px minimum)
- No hover effects (tap instead)
- Quick visual feedback
- Smooth scroll on all devices

### Viewport Considerations

- Optimized for all screen sizes
- No horizontal scroll
- Responsive images
- Mobile-first approach

---

## ⌨️ Keyboard Navigation

- **Tab**: Navigate between links and buttons
- **Enter**: Activate buttons/links
- **Escape**: Close mobile menu
- **Page Down**: Scroll down
- **Page Up**: Scroll up
- **Space**: Scroll down
- **Home**: Jump to top
- **End**: Jump to bottom

---

## ♿ Accessibility Features

### Screen Reader Support

- Proper semantic HTML
- Image alt text
- Link labels
- Form labels
- Heading hierarchy

### Color Contrast

- All text meets WCAG AA standards
- 4.5:1 contrast ratio on text
- Yellow accent is high-contrast

### Keyboard Access

- All interactive elements keyboard accessible
- Logical tab order
- No keyboard traps
- Visible focus indicators

---

## 🎬 Animation Summary

| Section         | Animation       | Effect                 |
| --------------- | --------------- | ---------------------- |
| Hero Name       | Stagger letters | Cinematic title reveal |
| Hero Subtitle   | Fade in         | Smooth appearance      |
| Scroll Arrow    | Bounce          | Encourages scrolling   |
| About Stats     | Count up        | Impressive credentials |
| About Text      | Word reveal     | Engaging read          |
| Experience Rows | Expand          | Accordion style        |
| Skills Pills    | Marquee scroll  | Modern, dynamic        |
| Projects Cards  | Lift on hover   | Interactive feel       |
| All Sections    | Scroll reveal   | Entrance animations    |
| Navbar          | Blur on scroll  | Premium detail         |
| Custom Cursor   | Follow with lag | Luxury feel            |

---

## 📊 Performance Perception

### Load Time

- **Under 2 seconds**: Professional, fast
- Preloader keeps user engaged
- Instant font loading (CDN)
- Smooth animations at 60fps

### Smooth Interactions

- No lag or stuttering
- Responsive button clicks
- Fluid scrolling experience
- Animations feel natural

---

## 🌐 Browser Experience

### Desktop (1920x1080)

- Full sidebar might be visible
- Large hero text impressive
- All columns visible
- Smooth animations

### Tablet (768x1024)

- Responsive grid adjusts
- Touch-friendly targets
- Full-screen menu appears
- Optimal readability

### Mobile (375x667)

- Single column layout
- Hamburger menu
- Touch-optimized
- Full viewport usage

---

## ✨ Premium Touches

1. **Custom Cursor**: Unique, tracks perfectly
2. **Smooth Scroll**: Not jarring, luxury feel
3. **Preloader**: Sets expectations
4. **Glowing Effects**: Subtle, not overdone
5. **Staggered Animations**: Professional, intentional
6. **Color Choice**: Bold, memorable yellow
7. **Typography**: Modern, readable
8. **Whitespace**: Generous, clean
9. **Hover Effects**: Subtle, responsive
10. **Parallax**: Depth, immersive

---

## 📝 First Impression

When visitors land on your portfolio:

1. **Preloader** (1-2 sec) → "This is professional"
2. **Hero** → "WOW, impressive name reveal"
3. **Scroll** → "Smooth, butter-like scrolling"
4. **About** → "Real credentials, impressive"
5. **Experience** → "Solid career progression"
6. **Skills** → "Modern tech stack"
7. **Work** → "Completed impressive projects"
8. **Education** → "Solid academic background"
9. **Achievements** → "Well-rounded professional"
10. **Contact** → "Easy to reach out"

**Overall feeling:** Premium, professional, impressive

---

## 🎯 Call-to-Action Effectiveness

- **Clear CTA**: "Start a Project" button
- **Multiple touchpoints**: Email, phone, LinkedIn
- **Easy contact**: Click to reach out
- **Mobile-friendly**: Links work on all devices
- **Professional appearance**: Encourages professional contact

---

**Result:** A visitor leaves impressed, wants to hire you or work with you! 🚀
