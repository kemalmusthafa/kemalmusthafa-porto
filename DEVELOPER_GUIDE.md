// DEVELOPER_GUIDE.md

# Developer's Quick Reference

## Common Tasks & Patterns

### 1. Adding a New Experience Entry

**File**: `lib/data.ts`

```typescript
{
  id: 7,
  position: 'Your Position',
  company: 'Company Name',
  startDate: 'Month Year',
  endDate: 'Month Year',
  details: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3',
  ],
},
```

### 2. Adding a New Skill

**File**: `lib/data.ts`

```typescript
skills: {
  languages: ['Laravel', 'NewSkill', ...],
  systems: [...],
  tools: [...],
},
```

### 3. Adding a New Project

**File**: `lib/data.ts`

```typescript
{
  id: 4,
  name: 'Project Name',
  description: 'Brief description',
  role: 'Your Role',
  tech: ['Stack', 'Technologies'],
  highlights: ['Key Achievement 1', 'Key Achievement 2'],
},
```

### 4. Changing the Accent Color

**File**: `tailwind.config.ts`

```typescript
colors: {
  accent: '#YOUR_COLOR',  // Change hex code
  'accent-dark': '#DARKER_SHADE',
}
```

**Also update**: `app/globals.css` for any hardcoded accent references

### 5. Modifying Animation Speed

**Example in Hero.tsx**:

```typescript
// Slower animation
transition={{ duration: 1.2 }}  // Increase duration

// Faster animation
transition={{ duration: 0.3 }}  // Decrease duration

// Adjust stagger delay
staggerChildren: 0.05,  // Increase for more spacing
```

### 6. Adding Parallax to an Element

**Pattern**:

```typescript
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const MyComponent = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <motion.div ref={ref} style={{ y }}>
      Content
    </motion.div>
  );
};
```

### 7. Adding a Hover Animation

**Pattern**:

```typescript
<motion.div whileHover={{ scale: 1.05, color: '#E8FF00' }}>
  Hover me
</motion.div>
```

### 8. Adding Scroll-in Animation

**Pattern**:

```typescript
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const ScrollComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      Content
    </motion.div>
  );
};
```

### 9. Creating a Staggered List Animation

**Pattern**:

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.ul variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.li key={item.id} variants={itemVariants}>
      {item}
    </motion.li>
  ))}
</motion.ul>
```

### 10. Making a Component Responsive

**Pattern**:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Single column on mobile, 2 on tablet, 3 on desktop */}
</div>

<p className="text-sm md:text-base lg:text-lg">
  {/* Different sizes per breakpoint */}
</p>

<div className="p-4 md:p-8">
  {/* Different padding per breakpoint */}
</div>
```

---

## Utility Functions & Hooks

### useScrollProgress()

Get scroll progress from 0 to 1:

```typescript
import { useScrollProgress } from "@/lib/hooks";

const { scrollYProgress } = useScrollProgress();
const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
```

### useParallax()

Create parallax effect with custom offset:

```typescript
import { useParallax } from '@/lib/hooks';

const { y } = useParallax(0.5);  // 50% of scroll speed

<motion.div style={{ y }}>Parallax Content</motion.div>
```

### useMousePosition()

Get current mouse coordinates:

```typescript
import { useMousePosition } from "@/lib/hooks";

const mousePosition = useMousePosition();
// Returns { x: number, y: number }
```

---

## Tailwind Classes Reference

### Responsive Breakpoints

```css
/* Mobile first */
.class              /* Default (mobile) */
md:class            /* 768px and up (tablet) */
lg:class            /* 1024px and up (desktop) */
xl:class            /* 1280px and up */
2xl:class           /* 1536px and up */
```

### Custom Colors

```css
bg-bg               /* Background: #0A0A0A */
bg-surface          /* Surface: #111111 */
bg-accent           /* Accent: #E8FF00 */
text-text           /* Text: #F5F5F5 */
text-muted          /* Muted: #888888 */
border-primary      /* Border: #222222 */
```

### Text Clamping

```tsx
<h1 className="text-clamp-hero">   /* 2rem - 10vw */
<h2 className="text-clamp-lg">     /* 1.5rem - 3rem */
<p className="text-clamp-md">      /* 1rem - 1.5rem */
```

---

## Common Patterns

### Section with Header

```typescript
<section id="section-id" className="relative px-6 md:px-12 py-20">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      className="mb-12"
    >
      <p className="text-muted text-xs md:text-sm font-semibold tracking-widest uppercase">
        XX — SECTION NAME
      </p>
    </motion.div>

    {/* Content */}
    {/* ... */}
  </div>
</section>
```

### Expandable Card

```typescript
const [expanded, setExpanded] = useState<number | null>(null);

<motion.div onClick={() => setExpanded(expanded === id ? null : id)}>
  <motion.div animate={{ height: expanded === id ? 'auto' : 60 }}>
    {/* Collapsed content */}
    {expanded === id && <div>{/* Expanded content */}</div>}
  </motion.div>
</motion.div>
```

### Infinite Marquee

```typescript
<motion.div
  animate={{ x: [0, -1000] }}
  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
>
  {/* Content multiplied for seamless loop */}
</motion.div>
```

---

## Import Paths

### Components

```typescript
import { Navbar } from '@/components/Navbar';
import * from '@/components';  // Import all
```

### Data & Hooks

```typescript
import { PORTFOLIO_DATA, NAVIGATION_LINKS } from '@/lib/data';
import { useScrollProgress, useParallax } from '@/lib/hooks';
import * from '@/lib';  // Import all
```

### Framer Motion

```typescript
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
```

### Lucide Icons

```typescript
import { ChevronDown, Mail, Linkedin, ExternalLink } from "lucide-react";
```

---

## Debugging Tips

### 1. Check Console Errors

Open browser DevTools (F12) → Console tab

### 2. Debug Animations

Add `layoutId` to elements to track them:

```typescript
<motion.div layoutId="debug-element">Content</motion.div>
```

### 3. Slow Down Animations

In DevTools Performance tab, throttle CPU to 6x slowdown

### 4. Check Responsive

Use Chrome DevTools device emulation (Ctrl+Shift+M)

### 5. Verify Data Loading

Check `lib/data.ts` is exporting correctly:

```typescript
console.log(PORTFOLIO_DATA);
```

### 6. Animation Not Triggering

- Verify `useInView` ref is attached
- Check `initial` and `animate` props
- Ensure `transition` is defined

---

## Performance Optimization

### 1. Lazy Load Components

```typescript
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
```

### 2. Memoize Components

```typescript
import { memo } from 'react';

export const MyComponent = memo(() => {
  return <div>Content</div>;
});
```

### 3. Optimize Images

- Use WebP format
- Compress before uploading
- Use `<Image>` from Next.js

### 4. Code Splitting

Next.js automatically code-splits per route

---

## Browser Compatibility

| Browser | Support   | Notes         |
| ------- | --------- | ------------- |
| Chrome  | ✅ Latest | Full support  |
| Firefox | ✅ Latest | Full support  |
| Safari  | ✅ Latest | Full support  |
| Edge    | ✅ Latest | Full support  |
| IE 11   | ❌        | Not supported |

---

## File Naming Conventions

- **Components**: PascalCase (Hero.tsx)
- **Utilities**: camelCase (useScrollProgress.ts)
- **Data**: camelCase (data.ts)
- **Constants**: UPPERCASE (PORTFOLIO_DATA)
- **CSS Classes**: kebab-case (text-clamp-hero)

---

## Git Workflow

```bash
# Create a new branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to remote
git push origin feature/new-feature

# Create pull request on GitHub
```

---

## Environment Variables

```env
# .env.local (add these if needed)
NEXT_PUBLIC_PORTFOLIO_URL=https://yourdomain.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
```

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run dev -- -p 3001  # On different port

# Production
npm run build            # Build for production
npm start               # Start production server
npm run lint            # Run linter

# Cleanup
rm -rf .next            # Clear Next.js cache
npm cache clean --force # Clear npm cache
```

---

## Resources

- **Icons**: [lucide.dev](https://lucide.dev)
- **Tailwind**: [tailwindcss.com](https://tailwindcss.com)
- **Framer**: [framer.com/motion](https://www.framer.com/motion/)
- **Next.js**: [nextjs.org](https://nextjs.org)
- **Colors**: [coolors.co](https://coolors.co)

---

**Happy coding! 🚀**
