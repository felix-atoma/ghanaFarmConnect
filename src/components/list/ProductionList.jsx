import React from 'react';

const ProductList = () => {
  const products = [
    // Dummy data for now
    { id: 1, name: 'Tomatoes', quantity: 50, price: 10, harvestDate: '2024-08-01' },
    { id: 2, name: 'Carrots', quantity: 30, price: 5, harvestDate: '2024-08-05' },
  ];

  return (
    <div className="mb-4">
      <h3 className="text-2xl mb-4">Available Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2 p-4 border border-gray-300 rounded">
            <h4 className="text-xl">{product.name}</h4>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.price}</p>
            <p>Harvest Date: {product.harvestDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
