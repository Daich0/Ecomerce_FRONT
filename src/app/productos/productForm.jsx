import { useState } from 'react';

const ProductForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    producto: '',
    marca: '',
    modelo: '',
    alto:'',
    ancho:'',
    garantia: '',
    color: '',
    peso: '',
    precio: '',
    imagen: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'imagen' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí puedes realizar la solicitud POST al servidor
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch('http://localhost:8080/productos', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Producto agregado exitosamente, puedes manejar el resultado aquí
        console.log('Producto agregado exitosamente');
      } else {
        // Manejar errores si la respuesta no es exitosa
        console.error('Error al agregar el producto');
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col mx-auto  p-8 items-center bg-blue-50 w-1/2 border-2 border-sky-500 rounded-md m-6"
    >
      <section>
        {/* Agrega campos para cada atributo del producto */}
        <label className="py-2">
          Producto:
          <input
            className="mx-2 w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="text"
            name="producto"
            value={formData.producto}
            onChange={handleInputChange}
          />
        </label>
        {/* Repite el proceso para otros campos */}
        <label>
          Marca:
          <input
            className="mx-2 w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Modelo:
          <input
            className="mx-2 w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="text"
            name="modelo"
            value={formData.modelo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Alto:
          <input
            className="mx-2 w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="text"
            name="alto"
            value={formData.alto}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Ancho:
          <input
            className="mx-2 w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="text"
            name="ancho"
            value={formData.ancho}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Garantia:
          <input
            className="mx-2 w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="text"
            name="garantia"
            value={formData.garantia}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Color:
          <input
            className="mx-2 w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="text"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Peso:
          <input
            className="mx-2 w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="text"
            name="peso"
            value={formData.peso}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Precio:
          <input
            className="mx-2 w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="text"
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Imagen:
          <input
            className="mx-2 w-72  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="file"
            name="imagen"
            onChange={handleInputChange}
          />
        </label>

        <button
          className="px-5 py-3 m-2 mx-auto text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700"
          type="submit"
          
        >
          Agregar Producto
        </button>

        <button
          onClick={closeModal}
          className="absolute top-0 right-0 px-3 py-2 text-white duration-150 bg-red-400 rounded-l-lg hover:bg-red-300 active:bg-red-500"
          type="button"
        >
          cerrar
        </button>
      </section>
    </form>
  );
};

export default ProductForm;
