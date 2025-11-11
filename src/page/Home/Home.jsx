import React from "react";


export default function Home() {
const products = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: `$${(Math.random() * 100 + 10).toFixed(2)}`,
  country: ["Japan", "USA", "Germany", "Bangladesh", "China"][i % 5],
  rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 - 5.0
  quantity: Math.floor(Math.random() * 100) + 1,
  image: `https://picsum.photos/seed/product${i}/300/200`,
}));

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">{p.name}</h2>
                <p className="text-gray-700 font-medium">{p.price}</p>
                <p className="text-gray-500 text-sm">Origin: {p.country}</p>
                <p className="text-yellow-500 font-semibold">⭐ {p.rating}</p>
                <p className="text-gray-600">Available: {p.quantity}</p>
                <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition">
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
