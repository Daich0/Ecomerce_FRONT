// Importamos React y el componente ProductCard.
import React from 'react';
import ProductCard from '../components/ProductCard'; 
import  { useState, useEffect } from 'react';
import axios from 'axios';
// Definimos el componente ProductList, que recibe 'products' como prop.
const ProductList = () => {
  // Renderizamos el componente.
  
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  return (
    // Usamos la clase 'grid' para crear un diseño de cuadrícula.
    // Se ajusta a diferentes tamaños de pantalla 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Mapeamos cada producto en la lista de productos. */}
      {productos.map((producto) => (
        // Por cada producto, renderizamos un componente ProductCard.
        // Asignamos una 'key' única para cada elemento de la lista (importante en React para identificar cada elemento de forma eficiente).
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
};


export default ProductList;
