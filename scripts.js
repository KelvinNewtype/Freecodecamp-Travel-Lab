document.addEventListener("DOMContentLoaded", () => {
    // This function sends hover data to the backend
    const sendHoverData = (data) => {
        fetch("https://your-backend-endpoint.com/hover", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                console.error("Failed to send hover data to the backend.");
            }
        })
        .catch(error => {
            console.error("Error sending hover data:", error);
        });
    };

    // Lazy loading for images
    // This ensures that images are only loaded when they are about to enter the viewport
    const lazyLoadImages = () => {
        const lazyImages = document.querySelectorAll("img[data-src]");
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src; // Set the actual image source
                    img.removeAttribute("data-src"); // Remove the data-src attribute
                    observer.unobserve(img); // Stop observing the image
                }
            });
        });

        lazyImages.forEach(img => {
            observer.observe(img);
        });
    };

    lazyLoadImages(); // Initialize lazy loading

    // Listen for mouse movements
    document.addEventListener("mousemove", (event) => {
        const element = document.elementFromPoint(event.clientX, event.clientY);
        if (element) {
            const hoverData = {
                x: event.clientX, // X-coordinate of the hover
                y: event.clientY, // Y-coordinate of the hover
                element: element.tagName, // Tag name of the hovered element
                textContent: element.textContent?.trim() || null, // Optional text content of the element
                timestamp: new Date().toISOString(), // Timestamp for the hover event
            };

            // Send the hover data to the backend
            sendHoverData(hoverData);
        }
    });
});