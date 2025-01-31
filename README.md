U6Y8### 🌍 Travel Agency Page ✈️  

This project, created by Kelvin Newtype, is a solution for the FreeCodeCamp HTML lab, the one directly after HTML Fundamentals. It showcases various travel packages and top itineraries, allowing for practice in HTML structure, semantics, and CSS styling.  

---

### 📝 User Stories  
#### HTML:  
- The page includes a `DOCTYPE` declaration.  
- The `html` element has the `lang` attribute set to `"en"`.  
- The `head` element contains:  
  - A `meta` element with `charset` set to `"utf-8"`.  
  - A `title` element with the text `"Travel Agency Page"`.  
- An `h1` element presents the travel destinations.  
- A paragraph below the `h1` element introduces the travel opportunities.  
- An `h2` element with the text `"Packages"`.  
- A paragraph introduces the various packages briefly.  
- An unordered list contains two list items:  
  - "Group Travels" enclosed by an anchor element.  
  - "Private Tours" enclosed by an anchor element.  
- An `h2` element with the text `"Top Itineraries"`.  
- At least three `figure` elements, each containing:  
  - An anchor element.  
  - An `img` element with an appropriate `alt` attribute and a `src` attribute set to a valid image.  
  - A `figcaption` element.  

#### CSS:  
- Styled using **brutalism design principles** to give the page a bold and functional aesthetic.  
- Features include:  
  - **Bright primary colors**: Each section is visually distinct for clarity and emphasis.  
  - **Minimal spacing**: Ensures a direct and clean layout.  
  - **Retro typewriter font**: Adds a functional, old-school feel.  
  - **Centered layout**: Keeps the design simple and engaging.


#### JS:


# 🎯 User Tracking & Lazy Loading

## ✨ Features
- 🔍 Mouse hover tracking & data collection
- 🖼️ Smart image lazy loading
- 📡 Backend data transmission


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

## 🔧 Note
Update backend URL before deployment:
```javascript
https://your-backend-endpoint.com/hover
```
---

### 🚀 How to Use  
1. Copy the HTML code into an HTML file (e.g., `index.html`).  
2. Copy the CSS code into a CSS file (e.g., `styles.css`).  
3. Link the CSS file to the HTML using this line in the `<head>`:  
   ```html  
   <link rel="stylesheet" href="styles.css">  
   ```
4. Link the JS file to the HTML using this line in the `<head>`:
   ```html
   <script src="path/to/script.js"></script>
   ```
5. Open the HTML file in a web browser to view the travel agency page.  
5. Feel free to customize the page further to match your personal style or add additional features! 🌟  

---

### 📄 License  
This project is open source and does not have a license.  

Newtype out. 🚀✨  
