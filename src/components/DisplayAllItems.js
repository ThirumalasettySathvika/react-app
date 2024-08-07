import React, { useState, useEffect } from 'react';

const DisplayAllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from JSON server
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="container">
      <h1>All Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayAllItems;
