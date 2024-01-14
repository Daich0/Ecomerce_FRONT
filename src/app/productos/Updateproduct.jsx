import React, { useState } from "react";
import axios from "axios";

function updatedProduct({ selectedProduct, onClose, onProductUpdate }) {
  const [editedProduct, setEditedProduct] = useState({ ...selectedProduct });
  
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setEditedProduct((prevData) => ({
      ...prevData,
      [name]: name === 'imagen' ? files[0] : value,
      
    }));

    
  };

  const handleUpdateProduct = async () => {
    const formData = new FormData();
    formData.append("producto", editedProduct.producto);
    formData.append("modelo", editedProduct.modelo);
    formData.append("marca", editedProduct.marca);
    formData.append("alto", editedProduct.alto);
    formData.append("ancho", editedProduct.ancho);
    formData.append("garantia", editedProduct.garantia);
    formData.append("color", editedProduct.color);
    formData.append("peso", editedProduct.peso);
    formData.append("precio", editedProduct.precio);
    formData.append("imagen", editedProduct.imagen);
    
    console.log(formData);

    try {
      const response = await axios.put(
        `http://localhost:8080/productos/${editedProduct.id}`,
        formData,

        console.log(formData),
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Actualizar el estado local o realizar alguna otra acción si es necesario
      /* console.log("Producto actualizado:", JSON.stringify(response.data));
    console.log(formData.id);
    console.log(editedProduct);
    console.log(updatedProduct) */
    console.log("despues" , formData)
      const updatedProductData = response.data;
      onProductUpdate(updatedProductData);
      onClose(); // Cerrar el modal después de editar el producto
    } catch (error) {
      console.error("Error al actualizar el producto", error.message);
    }
  };
  

  return (
    <div className="relative mx-auto w-96 h-1/3  flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Editar Producto</h2>
        <form>
          <div className="mb-2 flex items-center">
            <label htmlFor="name" className="block mb-1 text-black">
              Producto:
            </label>
            <input
              type="text"
              id="producto"
              name="producto"
              value={editedProduct.producto}
              onChange={handleInputChange}
              className="text-gray-500 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="category" className="block mb-1  text-black">
              Modelo:
            </label>
            <input
              type="text"
              id="modelo"
              name="modelo"
              value={editedProduct.modelo}
              onChange={handleInputChange}
              className="text-gray-500 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="price" className="block mb-1  text-black">
              Marca:
            </label>
            <input
              type="text"
              id="marca"
              name="marca"
              value={editedProduct.marca}
              onChange={handleInputChange}
              className="text-gray-500 rounded-md px-2 py-1 w-full"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="price" className="block mb-1  text-black">
              Alto:
            </label>
            <input
              type="alto"
              id="alto"
              name="alto"
              value={editedProduct.alto}
              onChange={handleInputChange}
              className="text-gray-500 rounded-md px-2 py-1 w-full"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="price" className="block mb-1  text-black">
              Ancho:
            </label>
            <input
              type="text"
              id="ancho"
              name="ancho"
              value={editedProduct.ancho}
              onChange={handleInputChange}
              className="text-gray-500 rounded-md px-2 py-1 w-full"
            />
          </div>

          <div className="mb-4 flex items-center ">
            <label htmlFor="price" className="block mb-1  text-black">
              Garantia:
            </label>
            <input
              type="text"
              id="garantia"
              name="garantia"
              value={editedProduct.garantia}
              onChange={handleInputChange}
              className="text-gray-500 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="price" className="block mb-1  text-black">
              Color:
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={editedProduct.color}
              onChange={handleInputChange}
              className="text-gray-500 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="price" className="block mb-1  text-black">
              Peso:
            </label>
            <input
              type="text"
              id="peso"
              name="peso"
              value={editedProduct.peso}
              onChange={handleInputChange}
              className="text-gray-500 rounded-md px-2 py-1 w-full"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="price" className="block mb-1  text-black">
              Precio:
            </label>
            <input
              type="text"
              id="precio"
              name="precio"
              value={editedProduct.precio}
              onChange={handleInputChange}
              className="text-gray-500 rounded-md px-2 py-1 w-full"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="image" className="block mb-1">
              Imagen
            </label>

            <input
              className="mx-2 w-72  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="file"
              id="imagen"
              name="imagen"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleUpdateProduct}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Guardar
            </button>

            <button
              type="button"
              onClick={() => onClose()}
              className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded-md"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default updatedProduct;
