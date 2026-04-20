# Kemal Musthafa Rajabi — Premium Parallax Portfolio

A premium, dark-themed, single-page parallax portfolio website built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**. Features cinematic scroll animations, smooth scrolling with Lenis, and an Awwwards-level aesthetic.

## 🎨 Features

- ✨ **Staggered letter animations** in Hero section
- 📜 **Smooth scroll experience** with Lenis integration
- 🎬 **Cinematic animations** using Framer Motion
- 🌙 **Dark premium aesthetic** with accent color (#E8FF00)
- 📱 **Fully responsive** design
- 🎯 **Custom cursor** with follow effect
- ⏳ **Animated preloader** with progress counter
- 🔝 **Fixed navbar** with scroll detection
- 📊 **Animated counter** for statistics
- 🏷️ **Skill marquee** with infinite scroll
- 🃏 **Expandable experience cards** with accordion effect
- 🎭 **Interactive project cards** with hover effects
- 📍 **Split-text hover animation** on contact email
- 💾 **TypeScript support** throughout

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS
- **Smooth Scroll**: Lenis (@studio-freight/lenis)
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

1. **Clone the repository:**

```bash
cd d:\next-portofolio
```

2. **Install dependencies:**

```bash
npm install
```

## 🔧 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/app
  layout.tsx         ← Global layout with fonts and providers
  page.tsx           ← Main page assembling all sections
  globals.css        ← Global styles and utilities
/components
  Navbar.tsx         ← Fixed navigation with scroll detection
  Hero.tsx           ← Hero section with letter animations
  About.tsx          ← About section with word reveal
  Experience.tsx     ← Experience timeline with accordion
  Skills.tsx         ← Skills marquee animations
  Projects.tsx       ← Work showcase cards
  Education.tsx      ← Education cards
  Achievements.tsx   ← Achievement grid
  Contact.tsx        ← Contact section with CTA
  CustomCursor.tsx   ← Custom cursor effect
  Preloader.tsx      ← Page preloader
  SmoothScroll.tsx   ← Lenis smooth scroll wrapper
/lib
  data.ts            ← Portfolio content and constants
  hooks.ts           ← Custom React hooks
/public
  favicon.ico        ← Page favicon
```

## 🎯 Key Components

### Navbar

- Transparent background with backdrop blur on scroll
- Active link indicator
- Mobile hamburger menu with staggered reveals

### Hero Section

- Full-screen height
- Staggered character animation for name
- Parallax subtitle
- Animated scroll indicator

### About Section

- Word-by-word text reveal animation
- Animated statistics with counters

### Experience

- Expandable accordion-style cards
- Smooth height animations on expand
- Indexed entries

### Skills

- Infinite marquee animations (left & right)
- Hover effects on skill pills

### Projects

- Card-based layout
- Hover lift effect with shadow
- Tech stack display
- View button with arrow

### Education

- Dual-column grid
- Score/GPA badges in accent color

### Achievements

- 2×2 grid layout (responsive)
- Icon display with shadow effects

### Contact

- Large CTA heading with word-by-word animation
- Contact items grid (email, phone, location, LinkedIn)
- "Start a Project" button
- Footer with copyright

## 🎨 Color Palette

- **Background**: #0A0A0A
- **Surface**: #111111
- **Accent**: #E8FF00
- **Text**: #F5F5F5
- **Muted**: #888888
- **Border**: #222222

## ✨ Animation Patterns Used

1. **Stagger Animations**: Multiple elements entering with delays
2. **Parallax Scroll**: Elements moving at different speeds
3. **Scroll Reveal**: Elements animating in when they enter viewport
4. **Hover Effects**: Interactive feedback on buttons and cards
5. **Split Text**: Text entering from bottom on hover

## 📝 Customization

### Update Portfolio Content

Edit [lib/data.ts](lib/data.ts) to update:

- Personal information
- Experience history
- Skills and technologies
- Projects portfolio
- Education details
- Achievements

### Modify Colors

Update the color palette in [tailwind.config.ts](tailwind.config.ts) and [app/globals.css](app/globals.css).

### Adjust Animations

Fine-tune animation timings and effects in individual component files.

## 🔗 Deployment

Deploy to Vercel with one click:

```bash
vercel deploy
```

Or build and deploy to any Node.js hosting provider.

## 📄 License

Open source and available for personal and commercial use.

## 🙏 Credits

- Design inspiration: jordangilroy.com & Awwwards
- Animation library: [Framer Motion](https://www.framer.com/motion/)
- Smooth scroll: [@studio-freight/lenis](https://github.com/studio-freight/lenis)
- Icons: [Lucide React](https://lucide.dev/)

---

**Built with ❤️ for Kemal Musthafa Rajabi**
