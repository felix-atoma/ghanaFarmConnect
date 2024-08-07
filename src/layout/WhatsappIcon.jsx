import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your message has been sent. We will reply to you via email.');
    setShowForm(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <a
        onClick={() => setShowForm(true)}
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-orange-500 transition-colors cursor-pointer"
      >
        <FaWhatsapp size={24} />
      </a>

      {showForm && (
        <div className="fixed bottom-16 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
          <h3 className="text-lg font-semibold mb-2 text-green-500">Contact Us</h3>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-2 border rounded-lg mb-2 bg-green-500 text-white placeholder-white"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-2 border rounded-lg mb-2 bg-gold-500 text-black placeholder-black"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="4"
              className="w-full p-2 border rounded-lg mb-2 bg-orange-500 text-white placeholder-white"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-orange-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WhatsAppIcon;
