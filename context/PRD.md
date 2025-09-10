TalepGetir.com - Complete Tech Stack & Development Plan
🛠️ Tech Stack
Frontend Framework
Next.js 14+ (App Router)
- TypeScript for type safety
- Server-side rendering for SEO
- Built-in optimization features
- Excellent performance out of the box
UI & Styling
Tailwind CSS + ShadCN/UI Components
- Utility-first CSS framework
- Pre-built accessible components
- Dark mode support (if needed)
- Mobile-first responsive design
Form Handling & Backend
Next.js API Routes + External Services
- Formspree for form submissions
- Calendly for appointment booking  
- Resend/EmailJS for email notifications
- Vercel Edge Functions for serverless logic
Database (Optional - Phase 2)
Prisma + PlanetScale (MySQL)
- Type-safe database access
- Serverless MySQL database
- Schema migrations
- Built-in connection pooling
Analytics & Tracking
Analytics:
- Google Analytics 4
- Vercel Analytics
- Plausible (privacy-focused alternative)

Heat Mapping:
- Hotjar (free tier: 35 sessions/day)
- Microsoft Clarity (completely free)

A/B Testing:
- Vercel Edge Config + custom logic
- Google Optimize (free)
Third-Party Integrations
Forms: Formspree (free: 50 submissions/month)
Calendar: Calendly (free: 1 calendar connection)
Exit-Intent: Poptin (free: 1,000 visitors/month)
Email: Resend (free: 3,000 emails/month)
WhatsApp: WhatsApp Business API
Deployment & Hosting
Vercel (Recommended)
- Automatic deployments from Git
- Edge functions support
- Built-in analytics
- Free SSL certificates
- CDN included

Alternative: Netlify
- Similar features to Vercel
- Form handling included
- Edge functions support
📁 Project Structure
talepgetir-website/
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── .env.local
├── .env.example
├── .gitignore
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                    # Ana sayfa
│   ├── strateji-dosyasi/
│   │   └── page.tsx               # Form sayfası
│   ├── tesekkurler/
│   │   └── page.tsx               # Teşekkür/Takvim sayfası
│   └── api/
│       ├── contact/
│       │   └── route.ts           # Form submission handler
│       └── analytics/
│           └── route.ts           # Custom analytics
│
├── components/
│   ├── ui/                        # ShadCN components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   ├── forms/
│   │   ├── contact-form.tsx
│   │   └── strategy-form.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── problems-section.tsx
│   │   ├── benefits-section.tsx
│   │   ├── social-proof-section.tsx
│   │   ├── faq-section.tsx
│   │   └── cta-section.tsx
│   └── integrations/
│       ├── calendly-widget.tsx
│       ├── analytics.tsx
│       └── exit-intent.tsx
│
├── lib/
│   ├── utils.ts                   # Utility functions
│   ├── validations.ts             # Form validation schemas
│   ├── analytics.ts               # Analytics helpers
│   └── integrations.ts            # Third-party API helpers
│
├── hooks/
│   ├── use-form-analytics.ts      # Form tracking hooks
│   └── use-scroll-analytics.ts    # Scroll tracking
│
├── types/
│   ├── forms.ts                   # Form type definitions
│   └── analytics.ts               # Analytics types
│
└── public/
    ├── images/
    │   ├── hero/
    │   ├── testimonials/
    │   └── logos/
    ├── icons/
    └── favicon.ico
📋 Dependencies
Core Dependencies
json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    
    // UI & Styling
    "tailwindcss": "^3.4.0",
    "@tailwindcss/forms": "^0.5.7",
    "@tailwindcss/typography": "^0.5.10",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    
    // ShadCN/UI Components
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-accordion": "^1.1.2",
    "lucide-react": "^0.263.1",
    
    // Form Handling
    "react-hook-form": "^7.48.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    
    // Analytics
    "analytics": "^0.8.11",
    "@vercel/analytics": "^1.1.0",
    
    // Animations
    "framer-motion": "^10.16.0"
  }
}
Development Dependencies
json
{
  "devDependencies": {
    "eslint": "^8.54.0",
    "eslint-config-next": "^14.0.0",
    "@typescript-eslint/eslint-plugin": "^6.10.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.5.7",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31"
  }
}
🔧 Configuration Files
next.config.js
javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
tailwind.config.js
javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // Custom TalepGetir colors
        'brand-blue': '#1E3A8A',
        'brand-gold': '#F59E0B',
        'brand-red': '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}
.env.example
bash
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-analytics-id

# Form Services
FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
FORMSPREE_API_KEY=your-formspree-api-key

# Email Services
RESEND_API_KEY=re_xxxxxxxxxx
ADMIN_EMAIL=info@talepgetir.com

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/strategy-meeting

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=90XXXXXXXXXX

# Exit Intent Popup
NEXT_PUBLIC_POPTIN_ID=your-poptin-id

# Environment
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=https://talepgetir.com
📱 Key Components Architecture
Form Components
typescript
// components/forms/strategy-form.tsx
interface StrategyFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  products: string;
  targetCountries: string;
  monthlySalesTarget: string;
}

// Validation with Zod
const strategyFormSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı"),
  company: z.string().min(2, "Şirket adı gerekli"),
  phone: z.string().min(10, "Geçerli telefon numarası girin"),
  email: z.string().email("Geçerli email adresi girin"),
  products: z.string().min(5, "Ürün açıklaması gerekli"),
  targetCountries: z.string().min(2, "Hedef ülkeler gerekli"),
  monthlySalesTarget: z.string().min(1, "Satış hedefi seçin"),
});
Analytics Integration
typescript
// lib/analytics.ts
export const trackFormSubmission = (formType: string, formData: any) => {
  // Google Analytics 4
  gtag('event', 'form_submit', {
    form_type: formType,
    form_location: window.location.pathname,
  });
  
  // Custom analytics
  analytics.track('Form Submitted', {
    formType,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  });
};

export const trackPageView = (page: string) => {
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};
🔄 Development Workflow
Git Workflow
bash
# Main branches
main        # Production branch
develop     # Development branch
feature/*   # Feature branches
hotfix/*    # Hotfix branches

# Workflow
1. Create feature branch from develop
2. Develop feature
3. Create PR to develop
4. Code review
5. Merge to develop
6. Test on staging
7. Merge develop to main
8. Deploy to production
Development Commands
bash
# Setup
npm install
cp .env.example .env.local
npm run dev

# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript check

# Deployment
vercel --prod        # Deploy to production
vercel --preview     # Deploy preview
📊 Performance Targets
Core Web Vitals
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
FCP (First Contentful Paint): < 1.8s
TTI (Time to Interactive): < 3.5s
Bundle Size Targets
Initial JS bundle: < 100KB gzipped
Total page weight: < 500KB
Image optimization: WebP/AVIF formats
Font loading: Preload critical fonts
🔒 Security Implementation
Security Headers
typescript
// next.config.js security headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]
Form Security
typescript
// Rate limiting for forms
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Çok fazla talep gönderdiniz, lütfen daha sonra tekrar deneyin.'
});

// CSRF protection
// Input sanitization with DOMPurify
// Server-side validation with Zod
📱 Mobile-First Implementation
Responsive Breakpoints
css
/* Tailwind breakpoints */
sm: '640px'   /* Small devices */
md: '768px'   /* Medium devices */
lg: '1024px'  /* Large devices */
xl: '1280px'  /* Extra large devices */
2xl: '1536px' /* 2X Extra large devices */

/* Custom mobile optimizations */
touch-target: min 44px
font-size: min 16px (iOS zoom prevention)
viewport: width=device-width, initial-scale=1
Mobile-Specific Features
typescript
// Touch-friendly interactions
const isMobile = () => {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

// Mobile-specific analytics
const trackMobileInteractions = () => {
  if (isMobile()) {
    analytics.track('Mobile User', {
      device: navigator.userAgent,
      screenSize: `${screen.width}x${screen.height}`,
    });
  }
};
🚀 Deployment Strategy
Environment Setup
bash
# Development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development

# Staging  
NEXT_PUBLIC_SITE_URL=https://talepgetir-staging.vercel.app
NODE_ENV=staging

# Production
NEXT_PUBLIC_SITE_URL=https://talepgetir.com
NODE_ENV=production
CI/CD Pipeline (GitHub Actions)
yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - run: npm run type-check
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
📈 Monitoring & Analytics
Error Tracking
typescript
// Sentry integration for error tracking
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
});

// Custom error boundaries
class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    Sentry.captureException(error, { contexts: { react: { errorInfo } } });
  }
}
Performance Monitoring
typescript
// Web Vitals tracking
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
  gtag('event', metric.name, {
    event_category: 'Web Vitals',
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    non_interaction: true,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
⏱️ Development Timeline
Week 1: Setup & Foundation
Days 1-2:

 Project initialization with Next.js 14
 ShadCN/UI setup and configuration
 Basic project structure creation
 Git repository setup and CI/CD pipeline
Days 3-5:

 Core components development (Header, Footer, Layout)
 Typography and color system implementation
 Responsive grid system setup
 Basic navigation and routing
Days 6-7:

 Analytics integration (GA4, Vercel Analytics)
 Error tracking setup (Sentry)
 Performance monitoring implementation
 Testing setup and initial tests
Week 2: Page Development
Days 1-3:

 Ana sayfa (Homepage) development
 Hero section with conversion-focused design
 Problems section with emotional triggers
 Benefits section with clear value props
 Social proof section with testimonials
Days 4-5:

 Form page (Strateji Dosyası) development
 Multi-step form with validation
 Progress indicators
 Error handling and success states
 Mobile optimization
Days 6-7:

 Thank you page (Teşekkürler) development
 Calendly integration
 WhatsApp fallback option
 Success tracking and analytics
 Cross-device testing
Week 3: Integration & Optimization
Days 1-2:

 Third-party integrations
 Formspree form handling
 Calendly calendar booking
 Resend email notifications
 WhatsApp Business API
Days 3-4:

 Exit-intent popup implementation (Poptin)
 A/B testing setup for hero headlines
 Form analytics and conversion tracking
 Heat mapping integration (Hotjar/Clarity)
Days 5-7:

 Performance optimization
 Image optimization and lazy loading
 Code splitting and bundle optimization
 SEO meta tags and structured data
 Core Web Vitals optimization
Week 4: Testing & Launch
Days 1-3:

 Comprehensive testing
 Cross-browser testing
 Mobile device testing
 Form submission testing
 Analytics verification
Days 4-5:

 Security implementation
 Rate limiting for forms
 CSRF protection
 Input sanitization
 Security headers
Days 6-7:

 Soft launch and monitoring
 Staging environment testing
 Production deployment
 Initial conversion tracking
 Performance monitoring setup
💰 Cost Breakdown
Initial Development (Free Tier)
Vercel Hosting: $0/month (free tier)
Formspree: $0/month (50 submissions)
Calendly: $0/month (1 calendar)
Poptin: $0/month (1,000 visitors)
Google Analytics: $0/month (free)
Hotjar: $0/month (35 sessions/day)
Total: $0/month
Growth Phase (Paid Tiers)
Vercel Pro: $20/month
Formspree Unlimited: $10/month
Calendly Essentials: $8/month
Poptin Basic: $19/month
Microsoft Clarity: $0/month (free)
Total: $57/month
Enterprise Phase
Vercel Team: $150/month
Advanced Analytics: $50/month
Premium Support: $100/month
Total: $300/month
Bu comprehensive tech plan, TalepGetir projesinin başından sonuna kadar tüm teknik aspectlerini kapsıyor ve Claude Code ile development için hazır bir roadmap sağlıyor.

