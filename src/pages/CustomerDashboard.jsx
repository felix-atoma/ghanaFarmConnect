import React from 'react';
import ProductList from '../components/list/ProductionList';
import Chat from '../components/messaging/Chat';
import SearchBar from '../components/forms/searchBar';


const CustomerDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 rounded-t-md shadow-md">
        <h2 className="text-3xl font-bold">Customer Dashboard</h2>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {/* Product List */}
        <section className="bg-orange-100 p-6 rounded-md shadow-md">
          <h3 className="text-orange-600 text-xl font-semibold mb-2">Products</h3>
          <ProductList />
        </section>
        <section className="bg-orange-100 p-6 rounded-md shadow-md">
          <h3 className="text-orange-600 text-xl font-semibold mb-2">Seach</h3>
          <SearchBar/>
        </section>

        {/* Chat Component */}
        <section className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-green-600 text-xl font-semibold mb-2">Chat</h3>
          <Chat />
        </section>
        
      </main>

      
    </div>
  );
};

export default CustomerDashboard;
