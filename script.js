// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Productos Ropa
    const products = [
      { id: 1, name: "Zapatos", price: 50, stock: 10, img: "imagenes/zapatos2.jpg"},
      { id: 2, name: "Camisa", price: 20, stock: 5, img: "imagenes/camisa.jpg" },
      { id: 3, name: "Reloj", price: 100, stock: 3, img: "imagenes/reloj2.jpg" },
      { id: 4, name: "Pantalon", price: 65, stock: 2, img: "imagenes/pantalon.jpg" },
      { id: 5, name: "Jean", price: 50, stock: 60, img: "imagenes/jean2.jpg" },
      { id: 6, name: "Sudadera", price: 80, stock: 20, img: "imagenes/sudadera2.jpg" },
      { id: 7, name: "Chaqueta", price: 150, stock: 10, img: "imagenes/chaqueta.jpg" },
      { id: 8, name: "Medias", price: 10, stock: 30, img: "imagenes/medias.jpg" },
      { id: 9, name: "Ropa interior hombre", price: 30, stock: 10, img: "imagenes/interior.jpg" },
      { id: 10, name: "Ropa interior mujer", price: 50, stock: 5, img: "imagenes/mujer.jpg" },
    //Productos electrodomesticos y tecnologia
      { id: 11, name: "Celular", price: 350, stock: 10, img: "imagenes/celular.jpg" },
      { id: 12, name: "Portatil", price: 500, stock: 5, img: "imagenes/portatil.jpg" },
      { id: 13, name: "Reloj inteligente", price: 250, stock: 2, img: "imagenes/inteligente.jpg" },
      { id: 14, name: "Computador de escritorio", price: 750, stock: 3, img: "imagenes/escritorio.jpg" },
      { id: 15, name: "Nevera", price: 870, stock: 7, img: "imagenes/nevera.jpg" },
      { id: 16, name: "Lavadora", price: 800, stock: 4, img: "imagenes/lavadora.jpg" },
      { id: 17, name: "Secadora", price: 760, stock: 4, img: "imagenes/secadora.jpg" },
      { id: 18, name: "Microondas", price: 130, stock: 3, img: "imagenes/microondas.jpg" },
      { id: 19, name: "Licuadora", price: 100, stock: 5, img: "imagenes/licuadora.jpg" },
      { id: 20, name: "Televisor plano", price: 350, stock: 1, img: "imagenes/televisor.jpg" },
    ];
  
    // Iniciar el carrito
    const cart = [];
  
    // Mostrar productos
    const productGrid = document.getElementById('productGrid');
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product';
      productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Precio: $${product.price}</p>
        <p>Stock: ${product.stock}</p>
        <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
      `;
      productGrid.appendChild(productCard);
    });
  
    // Función para agregar al carrito
    window.addToCart = (id) => {
      const product = products.find(p => p.id === id);
      if (product && product.stock > 0) {
        product.stock--;
        const cartItem = cart.find(item => item.id === id);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        updateCart();
      } else {
        alert("Producto sin stock");
      }
    };
  
    // Actualizar el carrito
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const updateCart = () => {
      cartItems.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        total += item.price * item.quantity;
        const li = document.createElement('li');
        li.textContent = `${item.name} - Cantidad: ${item.quantity}`;
        cartItems.appendChild(li);
      });
      cartTotal.textContent = total.toFixed(2);
    };
  
    // Modal de registro
    const registerModal = document.getElementById('registerModal');
    const registerBtn = document.getElementById('registerBtn');
    const closeBtn = document.querySelector('.close');
  
    registerBtn.onclick = () => registerModal.style.display = 'block';
    closeBtn.onclick = () => registerModal.style.display = 'none';
    window.onclick = (event) => {
      if (event.target === registerModal) {
        registerModal.style.display = 'none';
      }
    };

    // script.js

document.getElementById('advancedSearchBtn').addEventListener('click', () => {
  const filterType = document.getElementById('advancedSearch').value;
  let filteredProducts = [...products]; // Copia de los productos originales

  // Filtrar según el tipo seleccionado
  if (filterType === 'categoria') {
    // Simulación: filtra por una categoría ficticia
    filteredProducts = filteredProducts.filter(product => product.category === "zapatos");
  } else if (filterType === 'precio') {
    // Filtrar por precio (rango entre $20 y $50 como ejemplo)
    filteredProducts = filteredProducts.filter(product => product.price >= 20 && product.price <= 50);
  } else if (filterType === 'stock') {
    // Filtrar por productos con stock disponible
    filteredProducts = filteredProducts.filter(product => product.stock > 0);
  }

  // Actualizar el catálogo con los productos filtrados
  updateCatalog(filteredProducts);
});

// Función para actualizar el catálogo
function updateCatalog(productList) {
  const productGrid = document.getElementById('productGrid');
  productGrid.innerHTML = ''; // Limpia el catálogo actual

  productList.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
      <p>Stock: ${product.stock}</p>
      <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
    `;
    productGrid.appendChild(productCard);
  });
}
  });
  