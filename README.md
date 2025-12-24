# Muhammad Hussain Portfolio

A modern, high-performance portfolio website built with **Vite + React**, featuring a premium 2024+ design aesthetic with smooth animations, 3D depth effects, and responsive layouts.

![Portfolio Preview](./public/logo512.png)

## ✨ Features

- **⚡ Lightning Fast** - Built with Vite for instant HMR and optimized builds
- **🎨 Modern Design** - Premium 2024+ aesthetic with glass morphism and gradients
- **🌙 Dark Mode** - Seamless theme switching with system preference detection
- **📱 Fully Responsive** - Mobile-first design that looks great on all devices
- **🎭 Smooth Animations** - Framer Motion for page transitions and micro-interactions
- **🃏 3D Project Cards** - Interactive cards with perspective transforms and depth
- **📧 Contact Form** - Integrated with EmailJS for direct messaging
- **♿ Accessible** - WCAG compliant with proper ARIA labels and focus states

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Email:** EmailJS
- **Icons:** React Icons
- **Routing:** React Router 7

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, ScrollToTop
│   ├── sections/        # Page sections (Hero, Projects, Stats, etc.)
│   └── ui/              # Reusable UI components (Cards, Modals, etc.)
├── data/                # Static data (projects, etc.)
├── fonts/               # Custom fonts (GeneralSans)
├── hooks/               # Custom React hooks
├── images/              # Image assets
├── pages/               # Page components
└── styles/              # Global styles and Tailwind config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MuhammadHussain-code/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your EmailJS credentials:
   ```env
   VITE_SERVICE_ID=your_service_id
   VITE_TEMPLATE_ID=your_template_id
   VITE_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Colors

The design uses a carefully crafted color palette:

- **Primary:** Indigo-based accent colors (#6366F1)
- **Secondary:** Cyan accents (#06B6D4)
- **Neutral:** Slate-based grays
- **Semantic:** Success, warning, and error states

### Typography

Using the **GeneralSans** font family with variable font support for optimal performance.

### Components

All components follow a consistent design language with:
- Rounded corners (border-radius: 0.75rem - 1.5rem)
- Subtle shadows and glass effects
- Smooth hover/focus transitions
- Consistent spacing scale

## 📱 Pages

1. **Home** - Hero section with animated intro + Featured projects grid
2. **Projects** - Filterable project portfolio with 3D cards
3. **About** - Bio, skills, stats counter, and client logos
4. **Contact** - Contact form with social links

## 🔧 Configuration

### Vite Config

Includes path aliases for clean imports:
```javascript
import Component from '@components/Component';
import { data } from '@data/file';
```

### Tailwind Config

Extended with custom:
- Color palette
- Animations
- Shadows
- Container padding

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Muhammad Hussain**
- Website: [Portfolio](https://m-hussain.web.app)
- GitHub: [@MuhammadHussain-code](https://github.com/MuhammadHussain-code)
- LinkedIn: [Muhammad Hussain](https://linkedin.com/in/muhammad-hussain-834b38a0)
- Fiverr: [hussain_code](https://www.fiverr.com/hussain_code)

---

Made with ❤️ using React & Tailwind CSS
