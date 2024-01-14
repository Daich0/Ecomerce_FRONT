// ProductModal.js

import React from 'react';

const ProductModal = ({ producto, onClose }) => {
  if (!producto) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        {/* Detalles del producto */}
        <h2 className="text-2xl font-bold mb-4">{producto.producto}</h2>
        <div className="mb-4">
          <p className="text-gray-700">
            <span className="font-semibold">Marca:</span> {producto.marca}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Modelo:</span> {producto.modelo}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Alto:</span> {producto.alto}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Ancho:</span> {producto.ancho}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Garantía:</span> {producto.garantia}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Color:</span> {producto.color}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Peso:</span> {producto.peso}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Precio:</span> {producto.precio}
          </p>
        </div>
        <img
          src={`http://localhost:8080/productos/${producto.id}/imagen`}
          alt={`Imagen del producto ${producto.id}`}
          className="w-full mb-4"
        />

        
        {/* Botón para cerrar el modal */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
