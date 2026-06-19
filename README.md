# DepViz Landing Page

Pixel-perfect recreation of the DepViz landing page screenshot.  
Built with **Next.js 14 (App Router) + TypeScript + CSS Modules**.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
depviz/
├── public/
│   └── images/                  ← Drop your image assets here
│       ├── logo.png
│       ├── dashboard.png
│       ├── product-illustration.png
│       ├── operations-illustration.png
│       └── team-illustration.png
│
└── src/
    ├── app/
    │   ├── globals.css           ← CSS variables + reset + base styles
    │   ├── layout.tsx            ← Root layout + metadata
    │   └── page.tsx              ← Assembles all sections
    │
    └── components/
        ├── Navbar/
        │   ├── Navbar.tsx
        │   └── Navbar.module.css
        ├── Hero/
        │   ├── Hero.tsx
        │   └── Hero.module.css
        ├── Business/
        │   ├── Business.tsx
        │   └── Business.module.css
        ├── Product/
        │   ├── Product.tsx
        │   └── Product.module.css
        ├── Operations/
        │   ├── Operations.tsx
        │   └── Operations.module.css
        └── Team/
            ├── Team.tsx
            └── Team.module.css
```

---

## 🖼️ Image Assets

Place your images in `public/images/`. Required files:

| File | Usage | Recommended Size |
|------|-------|-----------------|
| `logo.png` | Navbar logo (top-left) | 100 × 30 px |
| `dashboard.png` | Hero analytics card chart | 640 × 180 px |
| `product-illustration.png` | Product section right panel | 420 × 340 px |
| `operations-illustration.png` | Operations section left panel | 420 × 340 px |
| `team-illustration.png` | Team section right panel | 420 × 340 px |

Until real images are added, colored gradient placeholders are shown.

---

## 🎨 Design Tokens (globals.css)

All colors, radii, and shadows are CSS custom properties:

```css
--color-bg-hero: #f0effe          /* soft lavender hero background */
--color-accent-purple: #6c5ce7    /* primary accent */
--color-gradient-start: #7c3aed  /* button/text gradient start */
--color-gradient-end: #06b6d4    /* button/text gradient end */
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| > 900px | Desktop: two-column feature sections |
| 768px – 900px | Tablet: stacked columns, reduced type |
| < 480px | Mobile: single-column, scaled typography |
