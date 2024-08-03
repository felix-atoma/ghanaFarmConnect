import React from 'react';
import ProductList from '../components/list/ProductionList';
import ProductionForm from '../components/forms/ProductionForm'
import OrderList from '../components/list/OderList'
// import Map from '../components/Map';

const FarmerDashboard = () => {
  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-green-50 p-6 rounded-lg shadow-md">
        <h2 className="text-4xl font-extrabold text-green-600 mb-6">Farmer Dashboard</h2>
        
        <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Add New Product</h3>
          <ProductionForm />
        </div>

        <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Product List</h3>
          <ProductList />
        </div>

        <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Order List</h3>
          <OrderList />
        </div>

        {/* <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Map</h3>
          <Map />
        </div> */}
      </div>
    </div>
  );
};

export default FarmerDashboard;
