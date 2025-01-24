document.addEventListener("DOMContentLoaded", () => {
    const itineraries = document.querySelectorAll(".itineraries figure");
    itineraries.forEach(figure => {
        figure.addEventListener("click", () => {
            alert(`You clicked on ${figure.querySelector("figcaption").textContent}!`);
        });
    });
});