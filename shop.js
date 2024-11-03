// Initialize an empty cart array
let cart = [];

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";  // Clear previous items
    let total = 0;

    cart.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ₱${item.price.toFixed(2)}`; // Changed to ₱ for currency
        cartItems.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = `Total: ₱${total.toFixed(2)}`; // Changed to ₱ for currency
    
    // Update the delivery fee display and total with delivery
    updateDeliveryFee();
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Thank you for your purchase!");
        cart = [];  // Clear the cart
        updateCartDisplay();
        document.getElementById("delivery-fee").textContent = "Delivery Fee: ₱0.00"; // Reset delivery fee display
    }
}

// Function to search products
function searchProducts() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const productName = product.getAttribute("data-name").toLowerCase();
        if (productName.includes(query)) {
            product.style.display = ""; // Show product
        } else {
            product.style.display = "none"; // Hide product
        }
// JavaScript to handle delivery fee calculation
        function updateDeliveryFee() {
            const deliveryMethod = document.getElementById('delivery-method');
            const selectedOption = deliveryMethod.options[deliveryMethod.selectedIndex];
            const fee = parseFloat(selectedOption.getAttribute('data-fee'));
            document.getElementById('delivery-fee').textContent = "Delivery Fee: ₱" + fee.toFixed(2);
            
            // Update cart total with delivery fee
            let cartTotal = parseFloat(document.getElementById('cart-total').textContent.replace("Total: ₱", ""));
            let totalWithDelivery = cartTotal + fee;
            document.getElementById('cart-total').textContent = "Total: ₱" + totalWithDelivery.toFixed(2);
        }

    
    });
}

