import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-950 text-white px-4 sm:px-8 md:px-16 lg:px-24 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
          <div className="mb-8 sm:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">La tiendita de la tae tae</h2>
            <p className="text-xs sm:text-sm">© 2024 Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2">Enlaces rápidos</h3>
              <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <li><a href="#" className="hover:text-gray-500">Inicio</a></li>
                <li><a href="#" className="hover:text-gray-500">Catálogo</a></li>
                <li><a href="#" className="hover:text-gray-500">Productos</a></li>
                <li><a href="#" className="hover:text-gray-500">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2">Redes Sociales</h3>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gray-500">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-500">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-500">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
