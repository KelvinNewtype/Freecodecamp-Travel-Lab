### Travel Agency Page ✈️  

This project is the solution for a FreeCodeCamp HTML lab, the one directly after the HTML Fundamentals lesson. It showcases various travel packages and top itineraries, allowing for practice in HTML structure, semantics, and CSS styling.  

---

### 📝 User Stories 
#### HTML:  
- The page includes a `DOCTYPE` declaration  
- The "html" element has the `lang` attribute set to `"en"`  
- The `head` element contains:
  - Complete SEO meta tags including Open Graph and Twitter Cards
  - Proper canonical URLs and favicon
  - Enhanced meta descriptions and keywords
  - Social media sharing optimization
- Structured navigation with semantic HTML5 elements
- Improved accessibility with ARIA labels and roles
- Optimized image alt texts for SEO
- Enhanced contact section with proper email formatting
- Footer with copyright and privacy policy links

#### CSS:  
- Styled using **brutalism design principles** to give the page a bold and functional aesthetic  
- Features include:  
  - **Bright primary colors**: Each section is visually distinct for clarity and emphasis  
  - **Minimal spacing**: Ensures a direct and clean layout  
  - **Typewriter font**: Adds a functional, old-school feel  
  - **Centered layout**: Keeps the design centered, simple and engaging

#### JS:
# 🎯 User Tracking and Lazy Loading 

## ✨ Features
- 🔍 Mouse hover tracking & data collection
- 🖼️ Smart image lazy loading
- 📡 Backend data transmission
- 📧 Email & Newsletter subscription functionality
- 🔄 Form validation and submission handling

## 💻 Usage
### Image Lazy Loading
```html
<img data-src="image.jpg" alt="Description">
```

### 📊 Hover Data Format
```json
{
    "x": number,
    "y": number,
    "element": string,
    "textContent": string | null,
    "timestamp": string
}
```

## ⚙️ Requirements
- 🌐 Modern browser
- 📡 Active backend endpoint
- 📨 Vercel deployment configuration
- 📧 Newsletter service integration

## 🔧 Deployment
1. Configure Vercel deployment settings
2. Set up environment variables for email service
3. Update backend URL before deployment:
```javascript
https://your-backend-endpoint.com/hover
```

## 📧 Email & Newsletter Setup
1. Implement email service provider integration
2. Set up newsletter subscription form
3. Configure email templates
4. Add form validation and success/error handling

---

### 🚀 How to Use  
1. Copy the HTML code into an HTML file (e.g., `index.html`)  
2. Copy the CSS code into a CSS file (e.g., `styles.css`)  
3. Link the CSS file to the HTML using this line in the `<head>`:  
   ```html  
   <link rel="stylesheet" href="styles.css">  
   ```
4. Link the JS file to the HTML using this line in the `<head>`:
   ```html
   <script src="path/to/script.js"></script>
   ```
5. Configure email and newsletter functionality
6. Deploy to Vercel
7. Test all features including form submissions
8. Open the HTML file in a web browser to view the travel agency page  
9. Feel free to customize the page further to match your personal style or add additional features! 🌟  

---

### 📄 License  
This project is open source and does not have a license. So feel free to use this. 

Newtype out. 🚀✨