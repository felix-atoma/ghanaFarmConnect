import React, { useState } from 'react';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: '',
    harvestDate: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle product submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3 className="text-2xl mb-4">Add New Product</h3>
      <div className="mb-4">
        <label className="block mb-2">Product Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 border border-gray-300 rounded"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Quantity</label>
        <input
          type="number"
          name="quantity"
          className="w-full p-2 border border-gray-300 rounded"
          value={product.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Price</label>
        <input
          type="number"
          name="price"
          className="w-full p-2 border border-gray-300 rounded"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Harvest Date</label>
        <input
          type="date"
          name="harvestDate"
          className="w-full p-2 border border-gray-300 rounded"
          value={product.harvestDate}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
