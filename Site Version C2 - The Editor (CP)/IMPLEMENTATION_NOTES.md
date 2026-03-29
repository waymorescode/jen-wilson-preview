# Implementation Notes for Jennifer Wilson Site Redesign

## Project Overview
- **Target Platform**: Squarespace (preferred) or Weebly
- **Current Site**: http://www.consciouspracticetherapy.com/
- **Focus**: Mobile-first therapy practice website
- **Timeline**: 6-8 weeks
- **Budget**: $1,200-1,500

## Key Requirements
1. **Mobile-First Design** - Client emphasized "probably mainly phone"
2. **Headway Integration** - Third-party insurance provider link
3. **Booking System** - 15-minute consultations (Calendly/Acuity)
4. **Professional Email** - jennifer@consciouspracticetherapy.com
5. **Therapy Focus** - 90% therapy, 10% consulting (consulting hidden in footer)

## Design Specifications
### Color Palette
- Primary Sage: #A4B8A4
- Secondary Cream: #F5F0E8
- Accent Blue: #B8CAD9
- Text Charcoal: #3A3A3A
- White: #FFFFFF
- Light Gray: #F5F5F5

### Typography
- Heading Font: 'Cormorant Garamond', serif
- Body Font: 'Lato', sans-serif
- Base Font Size: 18px (mobile minimum)
- Line Height: 1.6

### Design Aesthetic
- Style: "Elevated Coastal Wellness" / "Sophisticated Spa"
- Feel: Warm, professional, approachable
- NOT: Clinical, cold, corporate, or "woo-woo"

## Site Structure
### Primary Navigation
- Home
- About
- Therapy Services (dropdown)
  - Individual Therapy
    - Trauma & PTSD Recovery
    - Anxiety & Depression
    - Eating Disorders & Body Image
  - Couples Therapy
  - Family Therapy
- Insurance & Rates
- Contact
- [BOOK CONSULTATION] button

### Footer Navigation
- Main Links: About, Therapy Services, Insurance & Rates, Contact
- Professional Services: Clinical Supervision, For Nonprofits, Training & Consultation
- Legal: Privacy Policy, Terms of Service, Good Faith Estimate
- Connect: Phone, Email, Location

## Pages to Build
1. Homepage
2. About Dr. Wilson
3. Therapy Services (main page)
4. Individual Service Pages (Trauma, Anxiety, Eating Disorders)
5. Couples Therapy
6. Family Therapy
7. Insurance & Rates
8. Contact & Book
9. Professional Services (footer access only)

## Implementation Questions/Decisions Needed

### 1. Platform Choice
Since the spec was written for Squarespace but we need something that works on Squarespace OR Weebly:
- **Question**: Should we build this as a standalone HTML/CSS/JS site that can be imported into either platform?
- **Question**: Or should we create Squarespace-specific code/templates?
- **Recommendation**: Build as clean HTML/CSS/JS with modern responsive design that can be adapted to either platform

### 2. Template Selection
Spec recommends:
- "Clove" (free with Squarespace)
- "Good Vibes" by Applet Studio ($250)
- "Modern Wave" by Websites by Elise ($200)
- **Question**: Which template should we base the design on, or should we build from scratch?

### 3. Booking System Integration
- **Question**: Should we use Calendly or Acuity? (Acuity is included with Squarespace Business Plan)
- **Question**: Do we need to set up the actual booking system or just create placeholder links?

### 4. Headway Integration
- **Question**: Do we have the Headway provider link/URL to integrate?
- **Question**: Should this be a simple external link or embedded widget?

### 5. Images/Assets
- Spec mentions professional photos will be provided after photo shoot
- **Question**: Should we use placeholder images for now?
- **Question**: Do you have any temporary images we can use, or should we source stock photos?

### 6. Forms & Contact
- **Question**: Should we implement actual working contact forms or placeholders?
- **Question**: What backend should handle form submissions (Squarespace built-in, Formspree, etc.)?

### 7. Content Completeness
- **Question**: The spec has detailed content for most pages. Should we implement all of it, or start with core pages?
- **Recommendation**: Start with Homepage, About, one service page as template, Insurance & Rates, and Contact

### 8. Legal Pages
- **Question**: Do we need to create Privacy Policy, Terms of Service, and Good Faith Estimate content, or will these be provided?

### 9. Professional Services Page
- **Question**: Should this be a separate page or integrated into the footer with a modal/overlay?

### 10. Deployment Approach
Since this needs to work on Squarespace/Weebly:
- **Question**: Should we create a demo/preview site first that you can review before migrating to the final platform?
- **Recommendation**: Build a standalone responsive site in this repo, then provide instructions for importing into Squarespace

## Next Steps
Please advise on the questions above so I can proceed with the implementation in the most appropriate way for your needs.

