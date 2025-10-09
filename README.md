# Jennifer Wilson - Conscious Practice Therapy Website Redesign

**Target Platform**: Squarespace (preferred) or Weebly  
**Current Site**: http://www.consciouspracticetherapy.com/  
**Repository**: https://github.com/waymorescode/jennifer.wilson-site-redesign

## Project Overview

This repository contains a complete website redesign for Dr. Jennifer Wilson's therapy practice in St. Augustine, FL. The site has been redesigned from a consulting-focused website to a modern, mobile-first therapy practice site with an "Elevated Coastal Wellness" aesthetic.

## Design Specifications

### Color Palette
- **Primary Sage**: #A4B8A4
- **Secondary Cream**: #F5F0E8
- **Accent Blue**: #B8CAD9
- **Text Charcoal**: #3A3A3A
- **White**: #FFFFFF
- **Light Gray**: #F5F5F5

### Typography
- **Heading Font**: 'Cormorant Garamond', serif
- **Body Font**: 'Lato', sans-serif
- **Base Font Size**: 18px (mobile minimum)
- **Line Height**: 1.6

### Design Aesthetic
- **Style**: "Elevated Coastal Wellness" / "Sophisticated Spa"
- **Feel**: Warm, professional, approachable
- **NOT**: Clinical, cold, corporate, or "woo-woo"

## Site Structure

### Pages Included
1. **Homepage** (`index.html`) - Hero, welcome, services overview, testimonials
2. **About** (`about.html`) - Dr. Wilson's story, approach, credentials
3. **Services** (`services.html`) - Overview of all therapy services
4. **Insurance & Rates** (`insurance.html`) - Insurance info, pricing, FAQ
5. **Contact** (`contact.html`) - Booking, contact form, office info

### Navigation Structure
- Home
- About
- Therapy Services (dropdown)
  - Trauma & PTSD Recovery
  - Anxiety & Depression
  - Eating Disorders & Body Image
  - Couples Therapy
  - Family Therapy
- Insurance & Rates
- Contact
- Book Consultation (CTA button)

## Implementation Guide for Squarespace

### Option 1: Using Squarespace Custom Code

1. **Choose a Template**
   - Start with "Clove" (free, medical-focused) or similar clean template
   - Or use "Good Vibes" by Applet Studio ($250) for more customization

2. **Add Custom CSS**
   - Go to Design → Custom CSS
   - Copy the entire contents of `css/styles.css`
   - Paste into the Custom CSS editor
   - Adjust as needed for template-specific elements

3. **Create Pages**
   - Create pages matching the structure above
   - Use "Blank" page templates for maximum control
   - Add Code Blocks for custom HTML sections

4. **Add Content**
   - Copy HTML content from each page
   - Use Squarespace's built-in blocks where possible:
     - Text blocks for paragraphs
     - Button blocks for CTAs
     - Form blocks for contact forms
     - Spacer blocks for layout
   - Use Code Blocks for custom HTML sections that need specific styling

5. **Navigation Setup**
   - Configure main navigation in Design → Navigation
   - Set up dropdown menu for Therapy Services
   - Style the "Book Consultation" button as a highlighted CTA

6. **Mobile Optimization**
   - Test on mobile devices
   - Adjust spacing and font sizes in Mobile Styles
   - Ensure buttons are thumb-friendly (minimum 44px height)

### Option 2: Using Squarespace Sections

1. **Use Native Squarespace Blocks**
   - **Hero Section**: Use "Banner" or "Cover Page" section
   - **Welcome Section**: Use "Text" section with background color
   - **Services**: Use "Card" or "Grid" section
   - **Testimonials**: Use "Quote" or "Testimonial" section
   - **Footer**: Configure in Design → Footer

2. **Apply Custom Styling**
   - Use Site Styles to match color palette
   - Set fonts to match specifications (may need custom CSS for exact fonts)
   - Adjust spacing using section padding controls

3. **Forms & Integrations**
   - Use Squarespace Form blocks for contact forms
   - Integrate Acuity Scheduling (included with Business Plan)
   - Add Headway link as a button (external link)

## Implementation Guide for Weebly

### Using Weebly's Drag-and-Drop Editor

1. **Choose a Theme**
   - Select a clean, modern theme (e.g., "Wellness" or "Professional Services")
   - Customize colors to match the palette above

2. **Create Pages**
   - Add pages matching the site structure
   - Use Weebly's page editor to add sections

3. **Add Content**
   - Use Text elements for paragraphs
   - Use Button elements for CTAs
   - Use Contact Form element for forms
   - Use Embed Code element for custom HTML/CSS

4. **Custom CSS**
   - Go to Theme → Edit HTML/CSS
   - Add custom CSS from `css/styles.css` to the stylesheet
   - Adjust for Weebly-specific classes as needed

5. **Mobile Optimization**
   - Use Weebly's mobile editor to adjust layout
   - Test thoroughly on mobile devices

## Key Integrations Needed

### 1. Booking System
- **Recommended**: Acuity Scheduling (included with Squarespace Business Plan)
- **Alternative**: Calendly (free/paid plans)
- **Implementation**: Embed booking calendar on Contact page

### 2. Headway Insurance Integration
- Add Headway provider link/button
- Link format: `https://headway.co/providers/[provider-id]`
- Place prominently on Insurance page and as CTA throughout site

### 3. Contact Forms
- **Squarespace**: Use built-in Form blocks
- **Weebly**: Use Contact Form element
- **Fields**: Name, Email, Phone, Message, Best Time to Reach, Preferred Contact Method

### 4. Professional Email
- Set up `jennifer@consciouspracticetherapy.com`
- Recommended: Google Workspace ($6/month)
- Update all email links in the site

### 5. Google Maps
- Embed map showing St. Augustine area (not specific address for privacy)
- Add to Contact page

## Content Notes

### Images Needed
- Professional headshot of Dr. Jennifer Wilson
- Hero background image (St. Augustine beach or professional photo)
- Service page images (calming, wellness-themed)
- About page photo (warm, approachable)

**Current Placeholders**: Using Unsplash stock photos that should be replaced with professional photos after photo shoot.

### Content Updates Required
- Replace placeholder booking calendar with actual Acuity/Calendly embed
- Add actual Headway provider link
- Update Google Map with correct location
- Add professional photos when available

## Mobile-First Features

The site is designed mobile-first with these key features:

1. **Responsive Navigation**: Hamburger menu on mobile
2. **Large Touch Targets**: All buttons minimum 44px height
3. **Readable Text**: 18px minimum font size
4. **Sticky CTA**: Book button stays visible on mobile
5. **Fast Loading**: Optimized CSS, minimal dependencies
6. **Touch-Friendly**: Adequate spacing between interactive elements

## Testing Checklist

### Mobile Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] All buttons thumb-accessible
- [ ] Text readable without zoom
- [ ] Forms work properly
- [ ] Phone number clickable
- [ ] Fast load time (<3 seconds)

### Functionality
- [ ] Booking system works
- [ ] Contact forms submit properly
- [ ] Headway link works
- [ ] All internal links work
- [ ] Email links work
- [ ] Map displays correctly

### Cross-Browser
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

## Launch Checklist

### Pre-Launch
- [ ] Content review by client
- [ ] Professional photos added
- [ ] All forms tested
- [ ] Mobile testing complete
- [ ] Analytics installed (Google Analytics)
- [ ] SSL certificate active

### Launch Day
- [ ] DNS pointed to new site
- [ ] Old site backed up
- [ ] 301 redirects set up (if needed)
- [ ] Test all functionality
- [ ] Submit to Google Search Console

### Post-Launch
- [ ] Update Psychology Today profile
- [ ] Update Google Business Profile
- [ ] Update all directory listings
- [ ] Monitor analytics
- [ ] Fix any issues

## Files Included

- `index.html` - Homepage
- `about.html` - About Dr. Wilson
- `services.html` - Therapy Services overview
- `insurance.html` - Insurance & Rates
- `contact.html` - Contact & Booking
- `css/styles.css` - All styling
- `js/main.js` - JavaScript for mobile menu and interactions
- `IMPLEMENTATION_NOTES.md` - Detailed implementation questions and decisions

## Next Steps

1. **Review Content**: Have Dr. Wilson review all content for accuracy
2. **Gather Assets**: Collect professional photos and any additional content
3. **Set Up Integrations**: Configure Acuity/Calendly and Headway links
4. **Choose Platform**: Decide between Squarespace and Weebly
5. **Build in Platform**: Transfer design to chosen platform
6. **Test Thoroughly**: Complete all testing checklist items
7. **Launch**: Follow launch checklist

## Support & Questions

For questions about this implementation, refer to:
- `IMPLEMENTATION_NOTES.md` - Detailed implementation decisions
- Content revision documents provided by client
- Original implementation guide specifications

## License

This website design is proprietary and created specifically for Dr. Jennifer Wilson / Conscious Practice Therapy. All rights reserved.

---

**Last Updated**: October 2025  
**Version**: 1.0  
**Status**: Ready for platform implementation
