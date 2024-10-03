// Scrooling
const productsLink = document.getElementById("productsLink");
const productsSection = document.getElementById("products");
productsLink.addEventListener("click", function (event) {
    event.preventDefault();
    productsSection.scrollIntoView({ behavior: "smooth" });
});

const aboutSection = document.getElementById("aboutus");
const aboutusLink = document.getElementById("aboutusLink");
aboutusLink.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

const heroContent = document.getElementById("heroContent");
const homeLink = document.getElementById("homeLink");
homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    heroContent.scrollIntoView({ behavior: "smooth" });
});

const contactus = document.getElementById("contactus");
const contactusLink = document.getElementById("contactusLink");
contactusLink.addEventListener("click", function (event) {
    event.preventDefault();
    contactus.scrollIntoView({ behavior: "smooth" });
});



// Cart counter
var cartCounter = document.getElementById("cart-counter");
var count = 0;
function Counter() {
    count++;
    cartCounter.innerText = count;
}
function incrementCount() {
    count++;
    cartCounter.innerText = count;
}
function decrementCount() {
    count--;
    cartCounter.innerText = count;
}


// Product Fetching
function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((products) => {
            const productGrid = document.getElementById("productGrid");
            products.forEach((product) => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                productCard.innerHTML = `
                    <div class="product-image"><img src="${product.image
                    }" alt="${product.title}"></div>
                    <h1>${product.title}</h3>
                    <h3>${product.description}</h3>
                    <h2>Price: ₹${Number.parseFloat(product.price * 80).toFixed(
                        2
                    )}</h2>
                    <div class="buttons">
                    <div class="quantity-selector">
                        <button class="decrement-btn" onClick="decrementCount()">-</button>
                        <span class="quantity-value" id="quantity-value">0</span>
                        <button class="increment-btn" onClick="incrementCount()">+</button>
                    </div>
                    <button class="buy-button" onClick="Counter()">Add to cart</button>
                    </div>
                    
                    <h4>Rating: ${product.rating.rate}* (${product.rating.count
                    })</h4>
                `;
                productGrid.appendChild(productCard);
            });
        })
        .catch((error) => console.error("Error fetching products:", error));
}

window.onload = fetchProducts;


// Contact form validation
const inputmessageName = document.getElementById("inputmessageName");
const inputmessageEmail = document.getElementById("inputmessageEmail");
const inputMessage = document.getElementById("inputMessage");
function messageSend(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    if (name === "") {
        inputmessageName.innerText = "Please Enter a Valid Name";
        return false;
    }else if (email === "") {
        inputmessageEmail.innerText = "Please Enter a Valid Email";
        return false;
    }else if (message === "") {
        inputMessage.innerText = "Please Enter at Least 50 Character";
        return false;
    } else {
        alert("Message Send Successfully.");
        inputMessage.innerText = "";
        inputmessageName.innerText = "";
        inputmessageEmail.innerText = "";
        document.forms["contactForm"]["name"].value = "";
        document.forms["contactForm"]["email"].value = "";
        document.forms["contactForm"]["message"].value = "";
        return true;
    }
}