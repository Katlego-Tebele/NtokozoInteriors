# NTOKOZO MBATHA INTERIORS (PTY) LTD

**Premium Interior Design Website**

A fully responsive, modern, and luxurious website showcasing premium interior design services across South Africa.

---

## 🎨 About

**Business Name:** Ntokozo Mbatha Interiors (Pty) Ltd  
**Brand:** Ntokozo Interiors  
**Slogan:** "Turning Spaces Into Beautiful Homes"  

Ntokozo Mbatha Interiors transforms ordinary spaces into timeless masterpieces. We specialise in luxury kitchens, TV wall units, built-in wardrobes, ceilings, bathroom renovations, and custom interior solutions.

---

## ✨ Website Features

### Design
- Premium navy blue and gold color scheme
- Elegant typography with Playfair Display and Inter fonts
- Large, high-quality project photographs
- Smooth scroll-triggered animations
- Sophisticated hover effects
- Fully responsive on all devices

### Sections
1. **Hero Section** - Full-screen with call-to-action buttons
2. **About Us** - Business description with highlights
3. **Services** - 6 premium service cards with WhatsApp enquiry buttons
4. **Our Projects** - Filterable gallery with lightbox
5. **Pricing** - Transparent pricing with spray foam insulation table
6. **Why Choose Us** - 5 compelling reasons
7. **TikTok Integration** - Social media promotion
8. **Contact** - WhatsApp-integrated enquiry form
9. **Footer** - Comprehensive information and links

### Interactive Features
- Sticky navigation with active link highlighting
- Mobile hamburger menu
- Gallery filtering by category
- Full-screen lightbox with keyboard and touch navigation
- WhatsApp contact form
- Floating WhatsApp button
- Back to top button
- Smooth scrolling
- Scroll animations

---

## 📁 Project Structure

```
ntokozo-interiors/
│
├── index.html              # Main website file
├── css/
│   └── style.css          # All styling
├── js/
│   └── script.js          # All JavaScript functionality
│
├── images/
│   ├── logo.png           # Business logo
│   ├── hero.jpg           # Homepage background
│   ├── about.jpg          # About section image
│   ├── doors-placeholder.jpg
│   │
│   ├── kitchen/
│   │   ├── kitchen-placeholder.jpg
│   │   └── project1.jpg
│   │
│   ├── tv-units/
│   │   ├── tv-placeholder.jpg
│   │   └── [your TV unit projects]
│   │
│   ├── wardrobes/
│   │   ├── wardrobe-placeholder.jpg
│   │   └── [your wardrobe projects]
│   │
│   ├── bathrooms/
│   │   ├── bathroom-placeholder.jpg
│   │   └── [your bathroom projects]
│   │
│   └── ceilings/
│       ├── ceiling-placeholder.jpg
│       └── [your ceiling projects]
│
├── videos/
│   └── [your project videos]
│
└── README.md              # This file
```

---

## 🖼️ How to Add Your Images

### Required Images

1. **Logo** (`images/logo.png`)
   - Transparent PNG
   - Recommended size: 300x100px
   - Place in: `images/`

2. **Hero Background** (`images/hero.jpg`)
   - High-quality interior photo
   - Recommended size: 1920x1080px
   - Place in: `images/`

3. **About Section** (`images/about.jpg`)
   - Professional interior photo
   - Recommended size: 800x600px
   - Place in: `images/`

4. **Service Images**
   - Kitchen: `images/kitchen/kitchen-placeholder.jpg`
   - TV Units: `images/tv-units/tv-placeholder.jpg`
   - Wardrobes: `images/wardrobes/wardrobe-placeholder.jpg`
   - Bathrooms: `images/bathrooms/bathroom-placeholder.jpg`
   - Ceilings: `images/ceilings/ceiling-placeholder.jpg`
   - Doors: `images/doors-placeholder.jpg`

5. **Gallery/Project Images**
   - Add your completed project photos to respective category folders
   - Recommended size: 800x600px minimum
   - Use JPG format for photos
   - Compress images for web (use tinypng.com)

### Adding Gallery Images

Update the HTML in the gallery section:

```html
<div class="gallery-item" data-category="kitchens">
    <img src="images/kitchen/your-image.jpg" alt="Project Description" loading="lazy">
    <div class="gallery-overlay">
        <h4>Project Title</h4>
        <p>Brief description</p>
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```

**Categories:**
- `kitchens`
- `tv-units`
- `wardrobes`
- `bathrooms`
- `ceilings`
- `other`

---

## 📞 Contact Information

**Currently Configured:**

- **WhatsApp:** 076 689 1123 (27766891123)
- **Email:** ntokozombatha1836@gmail.com
- **TikTok:** @ntokozointeriors0
- **Facebook:** Mbatha interiors decorating
- **Service Area:** Nationwide, South Africa

### To Update Contact Information

Search and replace in `index.html`:
- Phone/WhatsApp: `076 689 1123` or `27766891123`
- Email: `ntokozombatha1836@gmail.com`
- TikTok: `@ntokozointeriors0`

---

## 💰 Pricing Configuration

### Current Pricing (Editable in HTML)

**TV Wall Designs:**
- Standard: R15,000
- Premium: R17,000

**Bathroom Renovation:**
- Modern Bathroom: R24,000

**Spray Foam Insulation:**
Complete pricing table from 3m×3m (R1,850) to 6m×8m (R17,000)

To update pricing, edit the pricing section in `index.html`.

---

## 🚀 Deployment

### Option 1: GitHub Pages (Free)

1. Create GitHub account
2. Create new repository
3. Upload all files
4. Enable GitHub Pages in Settings
5. Your site: `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Easiest)

1. Go to netlify.com
2. Drag and drop the project folder
3. Site goes live instantly
4. Get free subdomain: `yoursite.netlify.app`

### Option 3: Traditional Hosting

1. Upload via FTP or cPanel
2. Ensure `index.html` is in root
3. Set file permissions (folders: 755, files: 644)

---

## 📱 Testing

### Before Going Live:

- ✅ Test all WhatsApp links
- ✅ Verify email and social media links
- ✅ Test contact form submission
- ✅ Check gallery filtering
- ✅ Test lightbox navigation
- ✅ Verify mobile responsiveness
- ✅ Test on different browsers
- ✅ Check all images load
- ✅ Test navigation menu
- ✅ Verify pricing accuracy

### Recommended Browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS & Android)

---

## 🎨 Color Scheme

```css
Navy Blue: #071D3A
Gold: #C9A45C
White: #FFFFFF
Cream: #F8F5EF
Dark Text: #222222
```

To change colors, edit `:root` variables in `css/style.css`.

---

## ⚙️ Technical Details

### Technologies Used:
- HTML5 (semantic markup)
- CSS3 (Flexbox, Grid, animations)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Playfair Display, Inter)
- Font Awesome 6.4.0 (icons)

### Performance Optimizations:
- Lazy loading for images
- Debounced scroll events
- Optimized animations
- Mobile-first responsive design
- Fast loading times

### SEO Features:
- Semantic HTML structure
- Meta descriptions
- Open Graph tags
- Proper heading hierarchy
- Alt text for images
- Mobile-friendly

---

## 📋 Maintenance

### Updating Services:
Edit the services section in `index.html` to add/remove services.

### Updating Pricing:
Edit the pricing section in `index.html` to update prices.

### Adding Projects:
1. Add images to appropriate category folder
2. Update gallery section in `index.html`
3. Set correct `data-category` attribute

### Updating Business Information:
Search and replace throughout `index.html`.

---

## 🔒 Security

- No backend required
- No database needed
- All enquiries go directly to WhatsApp
- No sensitive data storage
- Safe for static hosting

---

## 📞 Support

For any issues or questions:
- Review this README
- Check HTML comments in code
- Verify all file paths are correct
- Ensure images are properly named
- Test WhatsApp number format

---

## ✅ Launch Checklist

Before launching:

- [ ] Add business logo
- [ ] Upload all project images
- [ ] Test all WhatsApp links
- [ ] Verify contact information
- [ ] Check pricing accuracy
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Optimize images for web
- [ ] Test contact form
- [ ] Verify social media links
- [ ] Check gallery filtering
- [ ] Test lightbox functionality
- [ ] Review all text content
- [ ] Check footer information
- [ ] Test navigation menu

---

## 📄 License

© 2026 Ntokozo Mbatha Interiors (Pty) Ltd. All Rights Reserved.

---

## 🎉 Final Notes

This is a **complete, production-ready website** with:
- ✨ Premium luxury design
- 📱 Full mobile responsiveness
- 🚀 Fast loading performance
- 💬 WhatsApp-first customer engagement
- 🎨 Professional animations
- 🖼️ Filterable project gallery
- 💰 Transparent pricing display
- 📞 Multiple contact options

**Simply add your images, verify contact details, and deploy!**

---

**Ntokozo Mbatha Interiors (Pty) Ltd**  
*"Turning Spaces Into Beautiful Homes"*

Contact: 076 689 1123 | ntokozombatha1836@gmail.com  
Follow us: @ntokozointeriors0 on TikTok
