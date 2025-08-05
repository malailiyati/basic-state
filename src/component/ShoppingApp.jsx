import React, { useState } from "react";

function ShoppingApp() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Baju", price: 100000 },
    { id: 2, name: "Sepatu", price: 300000 },
    { id: 3, name: "Celana", price: 150000 },
    { id: 4, name: "Tas", price: 200000 },
    { id: 5, name: "Sandal", price: 50000 },
  ];

  const addItemHandle = (product) => {
    const add = cartItems.find((item) => item.id === product.id);
    if (!add) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeItemHandle = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="mx-[20px] my-[20px]">
        <h1 className="text-[28px] font-bold">e-commerce</h1>

        <Product products={products} onAddToCart={addItemHandle} />
        <CartSummary
          cartItems={cartItems}
          onRemoveFromCart={removeItemHandle}
        />
      </div>
    </>
  );
}

function Product({ products, onAddToCart }) {
  return (
    <>
      <div className="mx-[20px] w-[200px]">
        <h2 className="my-[10px] font-bold">List Product</h2>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onAddToCart(product)}
            className="flex justify-between cursor-pointer"
          >
            <p>{product.name}</p>
            <p>Rp{product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function CartSummary({ cartItems, onRemoveFromCart }) {
  return (
    <>
      <div className="mx-[20px] my-[10px] w-[200px]">
        <h2 className="font-bold">Keranjang</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between">
            <div>
              {item.name} - Rp{item.price.toLocaleString()}
            </div>
            <p
              className="cursor-pointer"
              onClick={() => onRemoveFromCart(item.id)}
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShoppingApp;
