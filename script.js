// Get elements
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-container input');
const productCards = document.querySelectorAll('.product-card');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase().trim();

    productCards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase();
        const author = card.querySelector('.author').textContent.toLowerCase();

        if (title.includes(query) || author.includes(query)) {
            card.style.display = 'block'; // show matching card
        } else {
            card.style.display = 'none'; // hide non-matching card
        }
    });
});

// Optional: search on pressing Enter key
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});
