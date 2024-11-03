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
    });
}
