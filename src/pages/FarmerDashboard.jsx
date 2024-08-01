import React from 'react';
import ProductForm from '../components/forms/ProductionForm';
import ProductList from '../components/list/ProductionList'
import OrderList from '../components/list/OderList';

const FarmerDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Farmer Dashboard</h2>
      <ProductForm />
      <ProductList />
      <OrderList />
    </div>
  );
};

export default FarmerDashboard;
