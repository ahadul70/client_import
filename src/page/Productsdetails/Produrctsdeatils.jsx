import React, { useEffect, useRef, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const importref = useRef(null);

  const handleImportRef = () => {
    importref.current.showModal();
  };

  const handleCloseModal = () => {
    importref.current.close();
  };
const handleonSubmit = (e) => {
  e.preventDefault();

  // Get quantity value
  const quantity = e.target.quantity.value;
  const productId = product._id;
  const email = user?.email;
  console.log({ email, productId, quantity });
  handleCloseModal();
};

  // Protect route
  useEffect(() => {
    if (!user) {
      navigate("/login", {
        state: { from: `/ProductsDetails/${product?._id}` },
      });
    }
  }, [user, navigate, product]);

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-red-500">
          404 - Product Not Found
        </h1>
        <p className="text-gray-500 mt-4">
          The product you’re looking for doesn’t exist or was removed.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <img
        src={product.img}
        alt={product.name}
        className="w-full max-w-md mx-auto h-64 object-cover rounded-xl shadow-md"
      />
      <div className="mt-4 space-y-2">
        <p className="text-xl font-semibold">Price: ${product.price}</p>
        <p>Origin: {product.country}</p>
        <p>Rating: ⭐ {product.rating}</p>
        <p>Available: {product.quantity}</p>
      </div>

      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-4"
        onClick={handleImportRef}
      >
        Import Now
      </button>

      <dialog ref={importref} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Import Product</h3>
          <form onSubmit={handleonSubmit}>
            <fieldset className="fieldset">
              <label className="label">Quantity</label>
              <input
                type="text"
                className="input"
                name="quantity"
                placeholder="Enter order amount"
              />
            </fieldset>
            <div className="modal-action">
              <button type="submit" className="btn">
                Submit
              </button>
              <button type="button" className="btn" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ProductDetails;
