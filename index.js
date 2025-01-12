const button = document.getElementById('hoverButton');
const body = document.body;

// Add mouse hover event listener
button.addEventListener('mouseenter', (e) => {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    // Position the circle at the mouse hover location
    const rect = button.getBoundingClientRect();
    const circleX = e.clientX - rect.left;
    const circleY = e.clientY - rect.top;

    circle.style.left = `${circleX}px`;
    circle.style.top = `${circleY}px`;

    // Add the circle to the button and animate it
    button.appendChild(circle);
    requestAnimationFrame(() => circle.classList.add('show'));

    // Remove the circle after animation
    circle.addEventListener('transitionend', () => circle.remove());
});