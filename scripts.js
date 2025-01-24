document.addEventListener("DOMContentLoaded", () => {
    // Function to send hover data to the backend
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