// Cart data
let cart = [];
let total = 0;

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const productId = product.getAttribute('data-id');
    const productName = product.querySelector('h3').innerText;
    const productPrice = parseFloat(product.querySelector('p').innerText.replace('$', ''));

    // Add item to cart
    cart.push({ id: productId, name: productName, price: productPrice });
    total += productPrice;

    // Update cart UI
    updateCart();
  });
});

// Update cart UI
function updateCart() {
  const cartItems = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total');

  // Clear existing items
  cartItems.innerHTML = '';

  // Add new items
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
    `;
    cartItems.appendChild(li);
  });

  // Update total
  cartTotal.innerText = total.toFixed(2);
}
