import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const AddProduce = () => {
  const [produceName, setProduceName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'produce'), {
        produceName,
        description,
        quantity,
        price,
        availability,
      });
      alert('Produce added successfully');
    } catch (error) {
      console.error('Error adding produce:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Produce</h2>
      <input
        type="text"
        value={produceName}
        onChange={(e) => setProduceName(e.target.value)}
        placeholder="Produce Name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <input
        type="date"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        required
      />
      <button type="submit">Add Produce</button>
    </form>
  );
};

export default AddProduce;
