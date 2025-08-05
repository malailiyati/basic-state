import React, { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Baju", price: 120000 },
    { id: 2, name: "Celana", price: 150000 },
    { id: 3, name: "Topi", price: 80000 },
  ];

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (!exists) {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Toko Sederhana</h1>

      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

// Child Component 1: ProductList
function ProductList({ products, onAddToCart }) {
  return (
    <div className="space-y-2 mb-6">
      <h2 className="text-xl font-semibold mb-2">Daftar Produk</h2>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => onAddToCart(product)}
          className="cursor-pointer p-2 border rounded hover:bg-gray-100 flex justify-between"
        >
          <span>{product.name}</span>
          <span>Rp {product.price.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

// Child Component 2: Cart
function Cart({ cartItems, onRemoveFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Keranjang</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Keranjang kosong.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center py-1 border-b"
            >
              <div>
                {item.name} - Rp {item.price.toLocaleString()}
              </div>
              <button
                className="text-red-500 hover:underline"
                onClick={() => onRemoveFromCart(item.id)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div className="mt-4 font-semibold">
          Total: Rp {total.toLocaleString()}
        </div>
      )}
    </div>
  );
}

export default App;
