"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Form from './productForm';
import UpdatedProduct from "./Updateproduct";

function page() {
  const [productos, setLocalProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/productos");
      setLocalProductos(response.data);
    } catch (error) {
      console.error("Error al obtener a los usuarios:", error);
    }
  };

  const handleDelete = async (productoId) => {
    try {
      // Realizar la solicitud DELETE al servidor para eliminar el producto por su ID
      await axios.delete(`http://localhost:3000/productos/${productoId}`);
  
      // Actualizar localmente la lista de productos después de la eliminación
      const updatedProductos = productos.filter((producto) => producto.id !== productoId);
      setLocalProducts(updatedProductos);
    } catch (error) {
      console.error("Error al eliminar el producto", error);
    }
  };

  const toggleEditModal = (product) => {
    setSelectedProduct(product);
    setShowEditModal(!showEditModal);
  };

  const handleProductUpdate = (updatedProduct) => {
    const updatedProducts = localProducts.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );
  setLocalProducts(updatedProducts);
    console.log("Product updated:", updatedProduct);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-6">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Productos del Catalogo
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <button
           type="button"
            onClick={toggleModal}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Agregar nuevo producto
            </button>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Producto</th>
              <th className="py-3 px-6">Precio</th>
              <th className="py-3 px-6">Garantia</th>
              <th className="py-3 px-6">Modelo</th>
              <th className="py-3 px-6">Alto</th>
              <th className="py-3 px-6">Ancho</th>
              <th className="py-3 px-6">Imagen</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {producto.producto}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {producto.precio}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {producto.garantia}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {producto.modelo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {producto.alto}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {producto.ancho}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {
                    <img
                      src={`http://localhost:8080/productos/${producto.id}/imagen`}
                      alt={`Imagen del producto ${producto.id}`}
                      className="max-w-20 mt-2"
                    />
                  }
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    onClick={() => toggleEditModal(producto)}
                  >
                    Edit
                  </a>
                  <button
                    href="javascript:void()"
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    onClick={() => handleDelete(product.id)}
                 >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <Form closeModal={toggleModal} />
        </div>
      )}
      {showEditModal && selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <UpdatedProduct
            selectedProduct={selectedProduct}
            onClose={() => {
              toggleEditModal();
              setSelectedProduct(null);
            }}
            onProductUpdate={handleProductUpdate}
          />
        </div>
      )}
    </div>
  );
}

export default page;
