# TalepGetir Website Development Guide

## Project Overview
TalepGetir.com is a Next.js 14+ website designed to connect Turkish export companies with global opportunities through data-driven lead generation. This guide provides comprehensive instructions for Claude Code to assist with development, maintenance, and optimization.

## Core Tech Stack
- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript for type safety
- **Styling:** Tailwind CSS + ShadCN/UI Components
- **Form Handling:** Next.js API Routes + Formspree
- **Calendar:** Calendly integration
- **Email:** Resend/EmailJS
- **Deployment:** Vercel
- **Analytics:** Google Analytics 4, Vercel Analytics

## Brand Guidelines Reference
All visual development must adhere to the brand guidelines in:
- **Brand Style:** `/context/style-guide.md`
- **Design Principles:** `/context/design-principles.md`
- **Logo:** `logo.png` in project root

### Brand Colors
- **Ink Blue:** #1A2B4C (Primary brand color)
- **Pure White:** #FFFFFF (Primary background)
- **Stone Gray:** #6B7280 (Body text, secondary elements)
- **Charcoal:** #0F172A (High emphasis text)
- **Cloud:** #F8FAFC (Light backgrounds, cards)
- **Mist:** #E2E8F0 (Borders, dividers)

### Typography
- **Primary Font:** Aktifo (or similar geometric sans)
- **Weights:** Bold (700), Medium (500), Regular (400), Light (300)
- **Scale:** Display (48-64px), H1 (36-42px), H2 (24-28px), Body (16-18px), Caption (13-14px)

## Development Commands

### Setup & Installation
```bash
npm install
cp .env.example .env.local
npm run dev
```

### Development Workflow
```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript check
```

### Testing & Quality Assurance
```bash
npm run test         # Run test suite
npm run test:watch   # Run tests in watch mode
npm run e2e          # Run end-to-end tests
npm run analyze      # Bundle analyzer
```

**IMPORTANT:** Always run `npm run lint` and `npm run type-check` after making changes to ensure code quality.

## ShadCN/UI Integration

### Component Installation
When adding new UI components, always use the ShadCN MCP tools:

1. **Search for components:**
   ```bash
   # Use mcp__shadcn__search_items_in_registries
   # Search for: "button", "card", "form", etc.
   ```

2. **View component details:**
   ```bash
   # Use mcp__shadcn__view_items_in_registries
   ```

3. **Get installation command:**
   ```bash  
   # Use mcp__shadcn__get_add_command_for_items
   ```

4. **Find usage examples:**
   ```bash
   # Use mcp__shadcn__get_item_examples_from_registries
   # Search patterns: "button-demo", "card example", etc.
   ```

### Post-Installation Audit
After adding components, run:
```bash
# Use mcp__shadcn__get_audit_checklist
```

## Visual Development Workflow

### Design Compliance Process
IMMEDIATELY after implementing any front-end change:

1. **Identify Changes** - Review modified components/pages
2. **Navigate to Affected Pages** - Use Playwright to visit each changed view
3. **Verify Design Compliance** - Compare against design principles and brand guidelines
4. **Validate Feature Implementation** - Ensure change fulfills user requirements
5. **Check Acceptance Criteria** - Review context files and requirements
6. **Capture Evidence** - Take full page screenshot at 1440px desktop viewport
7. **Check for Errors** - Run console message checks

### Quick Visual Check Commands
```bash
# Navigate to page
mcp__playwright__browser_navigate to [URL]

# Take screenshot
mcp__playwright__browser_take_screenshot (fullPage: true, width: 1440)

# Check console errors
mcp__playwright__browser_console_messages

# Take snapshot for accessibility
mcp__playwright__browser_snapshot
```

### Comprehensive Design Review
For significant UI/UX changes, use the design review agent:
```bash
# Use Task tool with subagent_type: "design-review"
# Triggers comprehensive validation including:
# - Visual consistency across viewports
# - Accessibility compliance (WCAG AA+)
# - User experience quality
# - Brand guideline adherence
# - Responsive design testing
```

## Project Structure

```
TalepGetir/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── strateji-dosyasi/
│   │   └── page.tsx               # Strategy form page
│   ├── tesekkurler/
│   │   └── page.tsx               # Thank you/Calendar page
│   └── api/
│       ├── contact/route.ts
│       └── analytics/route.ts
├── components/
│   ├── ui/                        # ShadCN components
│   ├── layout/                    # Header, Footer, Navigation
│   ├── forms/                     # Contact, Strategy forms
│   ├── sections/                  # Page sections
│   └── integrations/              # Third-party widgets
├── lib/
│   ├── utils.ts
│   ├── validations.ts
│   └── integrations.ts
├── context/
│   ├── PRD.md                     # Product requirements
│   ├── style-guide.md             # Brand guidelines
│   └── design-principles.md       # Design checklist
└── public/
    ├── images/
    ├── icons/
    └── favicon.ico
```

## Page Architecture

### Homepage (/)
- Hero section with conversion-focused design
- Problems section with emotional triggers  
- Benefits section with clear value propositions
- Social proof with testimonials
- FAQ section
- CTA section

### Strategy Form (/strateji-dosyasi)
- Multi-step form with validation
- Progress indicators
- Form fields: name, company, phone, email, products, target countries, sales targets
- Mobile-optimized interface

### Thank You Page (/tesekkurler)
- Calendly integration for meeting booking
- WhatsApp fallback option
- Success tracking and analytics

## Form Handling & Validation

### Form Schema Example
```typescript
const strategyFormSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı"),
  company: z.string().min(2, "Şirket adı gerekli"),
  phone: z.string().min(10, "Geçerli telefon numarası girin"),
  email: z.string().email("Geçerli email adresi girin"),
  products: z.string().min(5, "Ürün açıklaması gerekli"),
  targetCountries: z.string().min(2, "Hedef ülkeler gerekli"),
  monthlySalesTarget: z.string().min(1, "Satış hedefi seçin"),
});
```

### Form Submission Flow
1. Client-side validation with React Hook Form + Zod
2. API route processing (/api/contact/route.ts)
3. Formspree integration for email delivery
4. Analytics tracking for conversion metrics
5. Redirect to thank you page with success state

## Analytics & Tracking

### Implementation Requirements
```typescript
// Track form submissions
trackFormSubmission(formType: string, formData: FormData)

// Track page views
trackPageView(page: string)

// Track user interactions
trackInteraction(action: string, element: string)
```

### Analytics Services
- **Google Analytics 4:** Primary analytics
- **Vercel Analytics:** Performance metrics
- **Plausible:** Privacy-focused alternative
- **Hotjar/Microsoft Clarity:** Heat mapping and user session recording

## Third-Party Integrations

### Calendly
```typescript
// Environment variable
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/username/strategy-meeting

// Component integration
<CalendlyWidget url={process.env.NEXT_PUBLIC_CALENDLY_URL} />
```

### WhatsApp Business
```typescript
// Environment variable  
NEXT_PUBLIC_WHATSAPP_NUMBER=90XXXXXXXXXX

// Direct link integration
const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`
```

### Email Services (Resend)
```typescript
// API route example
const email = await resend.emails.send({
  from: 'noreply@talepgetir.com',
  to: process.env.ADMIN_EMAIL,
  subject: 'Yeni Strateji Dosyası Talebi',
  html: emailTemplate,
});
```

## Performance Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms  
- **CLS (Cumulative Layout Shift):** < 0.1
- **FCP (First Contentful Paint):** < 1.8s
- **TTI (Time to Interactive):** < 3.5s

### Bundle Size Targets
- **Initial JS bundle:** < 100KB gzipped
- **Total page weight:** < 500KB
- **Image optimization:** WebP/AVIF formats
- **Font loading:** Preload critical fonts

### Optimization Checklist
- [ ] Image optimization with Next.js Image component
- [ ] Code splitting and lazy loading
- [ ] Font optimization and preloading
- [ ] Critical CSS inlining
- [ ] Bundle analysis and tree shaking
- [ ] Service worker for caching

## Security Implementation

### Security Headers
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options', 
    value: 'nosniff',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  }
]
```

### Form Security
- Rate limiting (5 requests per 15 minutes per IP)
- CSRF protection for form submissions
- Input sanitization with DOMPurify
- Server-side validation with Zod schemas

## Mobile-First Development

### Responsive Breakpoints
```css
/* Tailwind breakpoints */
sm: '640px'   /* Small devices */
md: '768px'   /* Medium devices */  
lg: '1024px'  /* Large devices */
xl: '1280px'  /* Extra large devices */
2xl: '1536px' /* 2X Extra large devices */
```

### Mobile Optimization
- Touch-friendly tap targets (min 44px)
- Prevent iOS zoom with 16px+ font size
- Optimized viewport meta tag
- Touch gestures for image galleries
- Mobile-specific navigation patterns

## Environment Configuration

### Development (.env.local)
```bash
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
RESEND_API_KEY=re_xxxxxxxxxx
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/username/meeting
NEXT_PUBLIC_WHATSAPP_NUMBER=90XXXXXXXXXX
```

### Production Environment
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://talepgetir.com
# All production API keys and endpoints
```

## Deployment & CI/CD

### Vercel Deployment
```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel --preview

# Environment variables configured in Vercel dashboard
```

### GitHub Actions Workflow
- Automatic deployment on push to main branch
- TypeScript checking
- ESLint validation
- Build testing
- Preview deployments for PRs

## Error Monitoring

### Error Tracking Setup
```typescript
// Sentry integration
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

### Error Boundaries
- React error boundaries for graceful failure handling
- Custom 404 and 500 error pages
- Automatic error reporting to monitoring services

## Testing Strategy

### Testing Framework
```bash
# Unit tests with Jest
npm run test

# E2E tests with Playwright  
npm run e2e

# Component testing with Testing Library
npm run test:components
```

### Test Coverage Requirements
- [ ] All form validation logic
- [ ] API route functionality
- [ ] Core user workflows
- [ ] Responsive design behavior
- [ ] Analytics tracking events

## Development Best Practices

### Code Quality
- Use TypeScript strict mode
- Follow ESLint configuration
- Implement Prettier formatting
- Write descriptive commit messages
- Use semantic versioning

### Component Development
- Create reusable UI components in `components/ui/`
- Follow ShadCN/UI patterns and conventions
- Implement proper TypeScript interfaces
- Include accessibility attributes (ARIA)
- Test component states and interactions

### Performance Monitoring
- Monitor Core Web Vitals in production
- Track conversion funnel metrics
- Set up alerts for performance regressions
- Regular bundle size analysis

## Troubleshooting Guide

### Common Issues
1. **ShadCN component not found:** Use `mcp__shadcn__search_items_in_registries` to find correct component names
2. **Form submission fails:** Check Formspree endpoint and API key configuration
3. **Analytics not tracking:** Verify Google Analytics ID and implementation
4. **Build failures:** Run `npm run type-check` and `npm run lint` to identify issues

### Debug Commands
```bash
# Check build output
npm run build 2>&1 | tee build.log

# Analyze bundle size
npm run analyze

# Test API routes locally
curl -X POST http://localhost:3000/api/contact -d '{"test": "data"}'
```

## Support Resources

### Documentation Links
- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN/UI Components](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

### Project Context Files
- `/context/PRD.md` - Product requirements document
- `/context/style-guide.md` - Complete brand guidelines
- `/context/design-principles.md` - S-tier design checklist

---

*This guide ensures consistent, high-quality development aligned with TalepGetir's brand identity and technical requirements. Always refer to context files and run comprehensive checks after implementing changes.*