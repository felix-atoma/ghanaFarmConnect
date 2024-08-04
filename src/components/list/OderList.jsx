import React, { useState, useEffect } from 'react';
import { collection, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
      setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  }, []);

  const updateOrderStatus = async (id, status) => {
    await updateDoc(doc(db, 'orders', id), {
      status,
    });
  };

  return (
    <div className="orders">
      <h2>Orders</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Product: {order.productName}</p>
          <p>Status: {order.status}</p>
          <button onClick={() => updateOrderStatus(order.id, 'shipped')}>Mark as Shipped</button>
        </div>
      ))}
    </div>
  );
};

export default Orders;
