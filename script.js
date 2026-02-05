// CART FUNCTIONALITY
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkout = document.getElementById('checkout');
const closeCart = document.getElementById('close-cart');

let cartArray = [];

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const name = product.querySelector('h3').innerText;
    const price = parseFloat(product.querySelector('p').innerText.replace('$',''));
    cartArray.push({name, price});
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cartArray.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.innerText = total.toFixed(2);
  cartCount.innerText = cartArray.length;
}

document.getElementById('cart').addEventListener('click', e => {
  if(e.target.id === 'cart') cart.classList.remove('active');
});

document.querySelector('a[href="#cart"]').addEventListener('click', e => {
  e.preventDefault();
  cart.classList.add('active');
});

closeCart.addEventListener('click', () => {
  cart.classList.remove('active');
});

checkout.addEventListener('click', () => {
  alert('Checkout functionality is not available yet.');
});
