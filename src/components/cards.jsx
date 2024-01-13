'use client'


import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Productos = () => {
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

  const obtenerImagen = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/productos/${id}/imagen`, { responseType: 'blob' });
      if (response.status === 200) {
        const imageUrl = URL.createObjectURL(response.data);
        console.log(`Imagen del producto ${id}:`, imageUrl);
        // Aquí podrías actualizar el estado de tu componente o realizar alguna acción con la URL de la imagen
      }
    } catch (error) {
      console.error(`Error al obtener la imagen del producto ${id}:`, error);
    }
  };

  return (
    <div className="productos grid grid-cols-3 gap-4">
      {productos.map(producto => (
        <div key={producto.id} className="card shadow-md p-4">
          <h2 className="text-xl font-bold text-white">{producto.producto}</h2>
          <h2 className="text-xl font-bold text-white">{producto.modelo}</h2>
          <p>Marca: {producto.marca}</p>
          <p>Modelo: {producto.precio}</p>
          {/* Renderizar otros campos del producto */}
          {producto.imagen && (
            <img src={`http://localhost:8080/productos/${producto.id}/imagen`} alt={`Imagen del producto ${producto.id}`} className="w-full mt-2" />
          )}
          {/* Aquí podrías renderizar otros detalles del producto */}
        </div>
      ))}
    </div>
  );
};

export default Productos;
