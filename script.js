function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
}

// Function to fetch products from the API and display them
function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const productGrid = document.getElementById('productGrid');
            products.forEach(product => {
                // Create product card for each product
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                    <button class="buy-button">Buy Now</button>
                `;
                productGrid.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Call the function to fetch and display products when the page loads
window.onload = fetchProducts;




const productsLink = document.getElementById('productsLink');
const productsSection = document.getElementById('products');

productsLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    productsSection.scrollIntoView({ behavior: 'smooth' });
});
