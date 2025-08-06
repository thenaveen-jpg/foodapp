
import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const products = [
  {
    id: 1,
    name: "Mango Pickle",
    price: 120,
    image: "https://i.imgur.com/o8Qf1vG.jpg",
  },
  {
    id: 2,
    name: "Garlic Pickle",
    price: 100,
    image: "https://i.imgur.com/Bt2nIr6.jpg",
  },
  {
    id: 3,
    name: "Mixed Veg Pickle",
    price: 130,
    image: "https://i.imgur.com/vAj9eMf.jpg",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setOrderPlaced(false);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const placeOrder = () => {
    setOrderPlaced(true);
    setCart([]);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🥒 Burgula’s Pickle Delivery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-md">
            <img src={product.image} alt={product.name} className="rounded-t-2xl w-full h-40 object-cover" />
            <CardContent className="space-y-2 p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg">₹{product.price}</p>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold">🛒 Cart</h2>
        {cart.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 text-lg font-semibold">Total: ₹{total}</div>
        {cart.length > 0 && (
          <Button className="mt-2" onClick={placeOrder}>Place Order</Button>
        )}
        {orderPlaced && (
          <p className="text-green-600 mt-2">🎉 Order placed successfully!</p>
        )}
      </div>
    </div>
  );
}
