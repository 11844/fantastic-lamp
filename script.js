const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 499, rating: 4 },
  { id: 2, name: "Laptop", category: "electronics", price: 899, rating: 5 },
  { id: 3, name: "T-Shirt", category: "clothing", price: 25, rating: 3 },
  { id: 4, name: "Novel Book", category: "books", price: 15, rating: 5 }
];

function renderProducts(items) {
  const container = document.getElementById("productList");
  container.innerHTML = '';
  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
      <p>Rating: ⭐ ${p.rating}</p>
      <button onclick="selectProduct(${p.id})">Buy</button>
    `;
    container.appendChild(div);
  });
}

function applyFilters() {
  const category = document.getElementById("categoryFilter").value;
  const price = parseFloat(document.getElementById("priceFilter").value) || Infinity;
  const rating = parseInt(document.getElementById("ratingFilter").value);

  const filtered = products.filter(p =>
    (category === "all" || p.category === category) &&
    p.price <= price &&
    p.rating >= rating
  );
  renderProducts(filtered);
}

function selectProduct(id) {
  const selected = products.find(p => p.id === id);
  localStorage.setItem("selectedProduct", JSON.stringify(selected));
  window.location.href = "checkout.html";
}

renderProducts(products);
