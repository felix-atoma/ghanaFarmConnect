import React from 'react';
import ProductList from '../components/list/ProductionList';
import Chat from '../components/messaging/Chat'

const CustomerDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Customer Dashboard</h2>
      <ProductList />
      <Chat />
    </div>
  );
};

export default CustomerDashboard;
