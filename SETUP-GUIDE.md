# Portfolio Website - Quick Setup Guide

## 🎯 Getting Started in 5 Minutes

### Step 1: Personalize Your Content

Open `index.html` and replace the following:

1. **Line 8**: Update the page title
   ```html
   <title>Your Name - Portfolio</title>
   ```

2. **Lines 23-24**: Update navigation logo
   ```html
   <a href="#home" class="nav__logo">Your<span>Portfolio</span></a>
   ```

3. **Lines 95-97**: Update hero section
   ```html
   <h1 class="hero__title">
       Hi, I'm <span class="hero__name">Your Name</span>
   </h1>
   <p class="hero__subtitle">Full Stack Developer & Creative Problem Solver</p>
   ```

4. **Lines 135-145**: Update about section stats
   ```html
   <span class="about__number">3+</span>
   <span class="about__label">Years Experience</span>
   ```

5. **Lines 450-470**: Update contact information
   ```html
   <a href="mailto:your.email@example.com">your.email@example.com</a>
   <a href="tel:+1234567890">+1 (234) 567-890</a>
   <span>Your City, Country</span>
   ```

### Step 2: Add Your Images

1. **Profile Photo**: Add `images/profile.jpg` (500x500px recommended)
2. **Project Images**: Add to `images/projects/` folder
   - project1.jpg, project2.jpg, etc.
   - Recommended size: 800x500px (16:10 ratio)

### Step 3: Customize Colors (Optional)

Open `css/style.css` and modify lines 15-20:

```css
:root {
    --primary-color: #2563eb;      /* Your brand color */
    --secondary-color: #f59e0b;    /* Accent color */
}
```

### Step 4: Update Skills

In `index.html`, lines 150-280, modify:
- Skill names
- Percentage values
- Add/remove skills as needed

### Step 5: Add Your Projects

In `index.html`, lines 290-450:
1. Update project titles and descriptions
2. Change technology tags
3. Add your GitHub and live demo links
4. Update `data-category` for filtering (web, mobile, design)

### Step 6: Social Media Links

Update social links throughout the file:
- Navigation social icons
- Contact section social links
- Footer social links

Replace `#` with your actual profile URLs.

## 🚀 Testing Checklist

- [ ] Open `index.html` in browser
- [ ] Test dark mode toggle
- [ ] Check all navigation links work
- [ ] Test mobile menu (resize browser)
- [ ] Verify smooth scrolling
- [ ] Test contact form validation
- [ ] Check project filtering
- [ ] Test on different browsers
- [ ] Test responsive design (use browser dev tools)

## 📱 Responsive Testing

Use browser DevTools (F12) to test:
- Desktop: 1920px, 1440px, 1024px
- Tablet: 768px, 1024px
- Mobile: 375px, 414px, 768px

## 🎨 Color Scheme Examples

### Professional Blue (Default)
```css
--primary-color: #2563eb;
--secondary-color: #f59e0b;
```

### Creative Purple
```css
--primary-color: #8b5cf6;
--secondary-color: #ec4899;
```

### Tech Green
```css
--primary-color: #10b981;
--secondary-color: #f59e0b;
```

### Modern Red
```css
--primary-color: #ef4444;
--secondary-color: #f59e0b;
```

## 🔧 Common Issues & Solutions

### Issue: Images not showing
**Solution**: Ensure images are in correct folder and paths match

### Issue: Dark mode not persisting
**Solution**: Check browser allows localStorage

### Issue: Mobile menu not working
**Solution**: Verify JavaScript is enabled

### Issue: Smooth scrolling not working
**Solution**: Check browser supports `scroll-behavior: smooth`

## 📦 Deployment Quick Guide

### GitHub Pages (Free)
1. Create GitHub repository
2. Push your code
3. Settings → Pages → Select main branch
4. Done! Site live at `username.github.io/repo-name`

### Netlify (Free)
1. Sign up at netlify.com
2. Drag & drop your folder
3. Done! Instant deployment

## 💡 Pro Tips

1. **Optimize Images**: Use TinyPNG before uploading
2. **Test Everywhere**: Check on real devices, not just browser resize
3. **Keep It Updated**: Regularly update your projects and skills
4. **SEO**: Update meta tags with your actual information
5. **Analytics**: Add Google Analytics to track visitors

## 📞 Need Help?

- Check README.md for detailed documentation
- Review code comments for explanations
- Test in browser console for JavaScript errors
- Use browser DevTools for CSS debugging

---

**Ready to launch? Follow the deployment guide in README.md!**