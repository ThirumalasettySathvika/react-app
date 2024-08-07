import React from 'react';

const DeleteItem = ({ itemId }) => {
  const handleDelete = () => {
    fetch(`http://localhost:3000/items/${itemId}`, {
      method: 'DELETE',
    });
  };

  return (
    <button onClick={handleDelete}>Delete Item</button>
  );
};

export default DeleteItem;
