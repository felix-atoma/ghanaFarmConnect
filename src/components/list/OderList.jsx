import React from 'react';

const OrderList = () => {
  const orders = [
    // Dummy data for now
    { id: 1, product: 'Tomatoes', quantity: 10, customer: 'John Doe', status: 'Pending' },
    { id: 2, product: 'Carrots', quantity: 5, customer: 'Jane Smith', status: 'Confirmed' },
  ];

  return (
    <div className="mb-4">
      <h3 className="text-2xl mb-4">Orders</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.id} className="mb-2 p-4 border border-gray-300 rounded">
            <h4 className="text-xl">{order.product}</h4>
            <p>Quantity: {order.quantity}</p>
            <p>Customer: {order.customer}</p>
            <p>Status: {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
