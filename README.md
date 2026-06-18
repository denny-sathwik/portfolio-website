# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design, dark mode toggle, smooth animations, and mobile-friendly navigation.

![Portfolio Preview]([https://via.placeholder.com/800x400/667eea/ffffff?text=Portfolio+Website](https://denny-sathwik.github.io/portfolio-website/))

## ✨ Features

### Core Features
- 🎨 **Modern Design** - Clean and professional layout with gradient accents
- 🌓 **Dark Mode** - Toggle between light and dark themes with localStorage persistence
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - Fade-in effects and smooth transitions throughout
- 🎯 **Interactive Navigation** - Active section highlighting and smooth scrolling
- 📧 **Contact Form** - Built-in form validation with user feedback
- 🎨 **Project Filtering** - Filter projects by category (Web, Mobile, Design)

### Technical Features
- Desktop-first responsive design approach
- CSS custom properties for easy theming
- Intersection Observer API for scroll animations
- LocalStorage for theme persistence
- Semantic HTML5 markup
- BEM-inspired CSS naming convention
- Optimized performance with debounce/throttle functions

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or Download** the repository
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View in browser**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or directly open `index.html` in your browser

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles including responsive design
├── js/
│   └── script.js          # All JavaScript functionality
├── images/
│   ├── profile.jpg        # Your profile photo
│   └── projects/          # Project screenshots
│       ├── project1.jpg
│       ├── project2.jpg
│       └── ...
└── README.md              # This file
```

## 🎨 Customization Guide

### 1. Personal Information

**Update HTML Content** (`index.html`):
- Replace "Your Name" with your actual name
- Update the hero section tagline and description
- Modify the about section with your bio
- Update contact information (email, phone, location)
- Add your social media links

### 2. Colors & Theme

**Modify CSS Variables** (`css/style.css`, lines 15-50):

```css
:root {
    /* Change primary color */
    --primary-color: #2563eb;  /* Your brand color */
    
    /* Change secondary color */
    --secondary-color: #f59e0b;  /* Accent color */
    
    /* Modify gradients */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 3. Typography

**Update Font Families** (`index.html`, line 13):
```html
<!-- Replace with your preferred Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600&display=swap" rel="stylesheet">
```

Then update CSS variables:
```css
:root {
    --font-primary: 'YourHeadingFont', sans-serif;
    --font-secondary: 'YourBodyFont', sans-serif;
}
```

### 4. Skills

**Update Skills** (`index.html`, lines 150-280):
- Modify skill names and percentages
- Add or remove skill categories
- Adjust progress bar widths

### 5. Projects

**Add Your Projects** (`index.html`, lines 290-450):
- Replace project images in `images/projects/`
- Update project titles and descriptions
- Modify technology tags
- Add live demo and GitHub links

### 6. Images

**Add Your Images**:
1. Add your profile photo: `images/profile.jpg`
2. Add project screenshots: `images/projects/project1.jpg`, etc.
3. Recommended sizes:
   - Profile photo: 500x500px (square)
   - Project images: 800x500px (16:10 ratio)

## 🎯 Features Breakdown

### Dark Mode
- Toggle button in navigation bar
- Smooth theme transitions
- Preference saved in localStorage
- Automatic theme persistence across sessions

### Responsive Design
- **Desktop** (> 1024px): Full layout with all features
- **Tablet** (768px - 1024px): Adjusted grid layouts
- **Mobile** (< 768px): Hamburger menu, stacked layouts

### Navigation
- Fixed header with shadow on scroll
- Smooth scrolling to sections
- Active section highlighting
- Mobile hamburger menu

### Animations
- Fade-in effects on scroll
- Smooth transitions on hover
- Animated skill progress bars
- Project card hover effects

### Form Validation
- Real-time validation
- Email format checking
- Minimum length requirements
- User-friendly error messages

## 🌐 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://yourusername.github.io/portfolio-website`

### Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live instantly with a custom URL

### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

### Traditional Hosting
1. Upload files via FTP to your web host
2. Ensure `index.html` is in the root directory
3. Access via your domain name

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚡ Performance Tips

1. **Optimize Images**
   - Compress images using tools like TinyPNG
   - Use WebP format for better compression
   - Implement lazy loading for images

2. **Minify Files**
   - Minify CSS and JavaScript for production
   - Use tools like UglifyJS or online minifiers

3. **Enable Caching**
   - Add cache headers in your server configuration
   - Use CDN for static assets

## 🐛 Troubleshooting

### Dark Mode Not Persisting
- Check browser localStorage is enabled
- Clear browser cache and try again

### Images Not Loading
- Verify image paths are correct
- Ensure images are in the `images/` directory
- Check file extensions match (case-sensitive on some servers)

### Mobile Menu Not Working
- Ensure JavaScript is enabled in browser
- Check browser console for errors
- Verify all IDs match between HTML and JavaScript

### Smooth Scrolling Not Working
- Some browsers may have smooth scrolling disabled
- Check CSS `scroll-behavior: smooth` is supported

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Google Fonts for typography
- Feather Icons for SVG icons
- Inspiration from modern portfolio designs
- Community feedback and contributions

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Web development documentation
- [CSS-Tricks](https://css-tricks.com/) - CSS tips and tricks
- [Can I Use](https://caniuse.com/) - Browser compatibility tables
- [Google Fonts](https://fonts.google.com/) - Free web fonts

## 🔄 Version History

### Version 1.0.0 (Current)
- Initial release
- Dark mode implementation
- Responsive design
- Contact form with validation
- Project filtering
- Smooth animations

---

**Made with ❤️ and ☕**

If you found this helpful, please consider giving it a ⭐ on GitHub!
