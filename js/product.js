document.addEventListener('DOMContentLoaded', () => {
    // Select all product cards
    const cards = document.querySelectorAll('.card');
    
    // Add the fade-in class to each card with a delay
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100); // Staggered delay for each card
    });
});