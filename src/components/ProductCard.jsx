
import React from 'react';

// Definimos el componente ProductCard, que recibe 'product' como prop.
const ProductCard = ({ producto }) => {
  // Si el producto no está disponible (es decir, es nulo o indefinido), 
  // mostramos un mensaje indicando que el producto no está disponible.
  if (!producto) {
    return <div className="text-center py-4">Producto no disponible.</div>;
  }

  // Renderizamos la tarjeta del producto.
  return (
    // Contenedor principal con estilo aplicado.
    <div className="w-54 rounded overflow-hidden shadow-lg mt-3">
      {/* Sección de la imagen del producto */}
      <div className="flex justify-center items-center h-40">
        {/* Imagen del producto con manejo seguro en caso de que no se cargue el producto (product?.) */}
        {producto.imagen && (
            <img src={`http://localhost:8080/productos/${producto.id}/imagen`} alt={`Imagen del producto ${producto.id}`} className="w-full mt-2" />
          )}
      </div>
      {/* Sección de descripción del producto */}
      <div className="px-4 py-2">
        {/* Nombre del producto */}
        <div className="font-bold text-lg">{producto.producto}</div>
        {/* Descripción del producto */}
        <p className="text-gray-700 text-sm">
          {producto?.garantia}
        </p>
      </div>
      {/* Sección de precios del producto */}
      <div className="px-4 pt-2 pb-2">
        {/* Precio original, precio con descuento y precio final del producto */}
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Original: S/ {producto?.precio}</span>
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Descuento: S/ { (producto.precio * 0.20).toFixed(2) }</span>
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Peso: Kg. {producto?.peso}</span>
        <span className="inline-block bg-red-200 rounded-full px-2 py-1 text-xs font-semibold text-red-700 mr-2 mb-2">Final: S/ {producto?.precio - (producto.precio * 0.20)}</span>
      </div>
      {/* Botón para agregar el producto */}
      <div className="px-4 pt-2 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm">
          AGREGAR
        </button>
      </div>
    </div>
  );
};


export default ProductCard;
    