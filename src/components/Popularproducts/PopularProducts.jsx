import React from "react";
import { use } from "react";
import { Link } from "react-router";

export const PopularProducts = ({ productspromise }) => {
  const products = use(productspromise);
  console.log(products);
  

  return (
    <div className="min-h-screen p-6  bg-slate-900">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Popular Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-slate-500 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-white">{p.name}</h2>
              <p className="text-white font-medium">{p.price}</p>
              <p className="text-white text-sm">Origin: {p.country}</p>
              <p className="text-yellow-500 font-semibold">⭐ {p.rating}</p>
              <p className="text-white">Available: {p.quantity}</p>
              <Link to={`/productdetails/${p._id}`}>
                <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
