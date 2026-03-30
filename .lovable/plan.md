

# Royal Grand — Premium Hotel Website

## Design System
- **Colors**: Deep Royal Blue (`#0B1D3A`), Gold (`#D4AF37`), Soft Beige (`#F5F5F5`), White
- **Typography**: Playfair Display (headings) + Inter (body) — elegant, premium feel
- **Effects**: Fade-in/slide-up scroll animations, glassmorphism cards, hover zoom on images, gold divider accents, transparent→solid navbar on scroll

## Pages & Structure

### 1. Home Page (`/`)
- **Hero**: Full-screen with the uploaded building image, dark overlay, "Welcome to Royal Grand" title, "Luxury Stay in Annavaram" subtitle, "Book Now" and "Contact Us" CTA buttons
- **About Preview**: Short intro text with gold dividers
- **Accommodation Preview**: Cards for Single & Double rooms with hover zoom
- **Facilities Highlights**: Icon grid (AC, WiFi, TV, Parking, 24/7 Service, etc.)
- **Testimonials**: 3 dummy guest reviews
- **CTA Section**: Full-width banner with booking prompt

### 2. About Page (`/about`)
- Hotel introduction with background image section
- Vision & Mission
- "Why Choose Us" feature cards

### 3. Accommodation Page (`/accommodation`)
- Grid of room cards (Single Bedroom, Double Bedroom) linking to detail pages

### 4. Single Bedroom Page (`/accommodation/single`)
- Large room image (placeholder)
- Facilities list with icons (AC, WiFi, TV, Parking, 24/7 Service)
- Description paragraph

### 5. Double Bedroom Page (`/accommodation/double`)
- Larger image, spacious layout
- Facilities in description format
- Premium feel with more whitespace

### 6. Contact Page (`/contact`)
- Left: Phone (98 7471 7471), full address (Opp: NVR Theaters, NH 16, Annavaram)
- Right: Embedded Google Maps iframe
- WhatsApp redirect button

## Global Components
- **Navbar**: Sticky, transparent→solid on scroll, icons for each link, Accommodation dropdown with Single/Double options, text-based "Royal Grand" branding
- **Footer**: Copyright, social icons, StaffArc credit with heart icon and logo link
- **Floating WhatsApp button**: Bottom-right, links to WhatsApp with the hotel's number
- **ScrollToTop**: Smooth scroll to top on route change
- **Scroll-to-top button**: Visible on scroll-down

## Configuration
- `vercel.json` with SPA rewrites and asset caching headers
- SEO meta tags on each page

