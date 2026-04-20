# Kemal Portfolio - Setup Guide

## Quick Start

This is a complete Next.js 14 + Framer Motion parallax portfolio project. Follow these steps to get started.

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:

- `next` - Next.js 14 framework
- `react` & `react-dom` - React library
- `framer-motion` - Animation library
- `@studio-freight/lenis` - Smooth scroll library
- `tailwindcss` - Utility-first CSS
- `lucide-react` - Icon library
- `typescript` - Type safety

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
d:\next-portofolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page - assembles all sections
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Navbar.tsx          # Fixed navigation with scroll detection
│   ├── Hero.tsx            # Hero section - name, subtitle, scroll indicator
│   ├── About.tsx           # About section - bio & stats
│   ├── Experience.tsx      # Experience timeline - expandable cards
│   ├── Skills.tsx          # Skills - marquee animations
│   ├── Projects.tsx        # Projects - showcase cards
│   ├── Education.tsx       # Education - degree cards
│   ├── Achievements.tsx    # Achievements - grid layout
│   ├── Contact.tsx         # Contact section & CTA
│   ├── CustomCursor.tsx    # Custom cursor effect
│   ├── Preloader.tsx       # Animated page preloader
│   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   └── index.ts            # Component exports
├── lib/
│   ├── data.ts             # Portfolio content & constants
│   ├── hooks.ts            # Custom React hooks
│   └── index.ts            # Library exports
├── public/
│   └── favicon.ico         # Favicon
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── next.config.js          # Next.js config
├── .gitignore              # Git ignore rules
├── .env.example            # Environment variables example
└── README.md               # Project documentation
```

## Configuration

### Update Portfolio Content

Edit `lib/data.ts` to customize:

```typescript
export const PORTFOLIO_DATA = {
  name: "Your Name",
  email: "your.email@example.com",
  // ... more fields
};
```

### Customize Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  bg: '#0A0A0A',           // Background
  surface: '#111111',      // Surface elements
  accent: '#E8FF00',       // Accent/highlight color
  text: '#F5F5F5',         // Text color
  muted: '#888888',        // Muted text
  border: '#222222',       // Border color
}
```

### Modify Animation Timings

Each component has configurable animation values:

- `duration` - Length of animation in seconds
- `delay` - Delay before animation starts
- `staggerChildren` - Delay between staggered elements
- `ease` - Easing function (linear, easeInOut, etc.)

## Features Explained

### 🎬 Smooth Scrolling

Uses Lenis library for butter-smooth scrolling experience.

### ✨ Staggered Animations

Letters, words, and elements animate in sequence for dramatic effect.

### 📜 Parallax Effects

Sections move at different speeds as you scroll for depth.

### 🎯 Custom Cursor

Small dot + large ring that follows mouse with lag effect.

### ⏳ Preloader

Animated preloader with progress counter (0-100%).

### 🔝 Navbar with Scroll Detection

- Transparent background initially
- Blurred dark background on scroll
- Active section indicator
- Mobile hamburger menu

### 📊 Animated Counters

Statistics animate from 0 to final number when in view.

### 🃏 Expandable Cards

Experience entries expand on click to show details.

### 🏷️ Skill Marquees

Skills scroll infinitely left and right with hover effects.

### 🎭 Interactive Projects

Project cards lift on hover with shadow effect.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Click "Deploy"

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Other Platforms

Build the project first:

```bash
npm run build
npm start
```

Then deploy the `.next` folder to any Node.js hosting.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Images**: Optimize all images before upload
2. **Fonts**: Already loaded from Google Fonts via CDN
3. **Bundle**: Next.js handles code splitting automatically
4. **Caching**: Configure caching headers for static assets

## Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Clear Cache

```bash
rm -rf .next node_modules package-lock.json
npm install
```

### TypeScript Errors

Make sure all imports are using correct paths:

```typescript
// ✓ Correct
import { Hero } from "@/components/Hero";

// ✗ Incorrect
import { Hero } from "./components/Hero";
```

## System Requirements

- Node.js 18+ (recommended 20+)
- npm 9+ or yarn 3.6+
- Modern web browser

## File Size

- Production bundle: ~2.5MB (optimized)
- Gzipped: ~500KB
- Fonts loaded from CDN

## API Keys & Secrets

Store sensitive data in `.env.local`:

```env
NEXT_PUBLIC_PORTFOLIO_URL=https://yourdomain.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
```

**Note**: Only variables prefixed with `NEXT_PUBLIC_` are accessible in the browser.

## Common Tasks

### Update Company Information

Edit `PORTFOLIO_DATA.experience` in `lib/data.ts`

### Add a New Project

Add to `PORTFOLIO_DATA.projects` array in `lib/data.ts`

### Change Accent Color

Edit `accent` color in `tailwind.config.ts`

### Modify Section Animations

Edit component files in `components/` folder

## Need Help?

Refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lenis Documentation](https://github.com/studio-freight/lenis)

## License

This project is yours to use, modify, and deploy freely.

---

**Ready to launch? Run `npm install && npm run dev`** 🚀
