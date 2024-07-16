import React from 'react';

const ProductCard = ({ product , handleClickOpen} ) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg m-4 w-60 h-80 flex flex-col" onClick={handleClickOpen}>
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4" />
      <h3 className="text-lg font-bold mb-2 ">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-green-500 font-bold mb-2">${product.price}</p>
      <p className="text-yellow-500">{product.rating} stars</p>
    </div>
  );
};

export default ProductCard;
