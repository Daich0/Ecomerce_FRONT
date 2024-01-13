'use client';
// Importación de módulos y componentes necesarios
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'; // Para optimizar imágenes
import Link from 'next/link'; // Para la navegación entre páginas

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { SearchIcon, ShoppingCartIcon, BellIcon, MenuIcon } from '@heroicons/react/outline'; // Iconos

import Head from 'next/head'; // Para modificar el head del documento HTML

// Componente de navegación principal
export default  function Navega() {
  // Estado para controlar la visibilidad del menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ref para referenciar el menú móvil en el DOM
  const mobileMenuRef = useRef();
  //const session = await getServerSession(authOptions);
  // Efecto para manejar clics fuera del menú móvil
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    // Añadir escuchador de eventos
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Limpiar el escuchador al desmontar el componente
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // JSX para la estructura de la barra de navegación
  return (
    <nav className='fixed w-full'>
      <Head>
        <title>LOS CHOCLITOS</title> {/* Título de la página */}
      </Head>

      {/* Barra de navegación principal */}
      <nav className="bg-gray-100 p-4 shadow-md flex justify-between items-center">
        {/* Logo y título */}
        <div className="flex items-center space-x-4">
          <Image src="/choclito.PNG" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">LOS CHOCLITOS</h1>
        </div>

        {/* Enlaces y opciones de navegación para dispositivos de escritorio */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Enlaces a diferentes rutas de la aplicación */}
         
          <Link href="/ruta-catalogo">
            <h2 className="text-gray-600 hover:border-b-2 border-orange-500 px-2 cursor-pointer">Catálogo</h2>
          </Link>
          {/* Campo de búsqueda */}
          <div className="relative">
            <input
              type="text"
              placeholder="¿Qué quieres encontrar?"
              className="pl-10 pr-4 py-2 rounded-full bg-white shadow-inner w-64 focus:outline-none"
            />
            <SearchIcon className="w-5 h-5 absolute left-3 top-2/4 transform -translate-y-2/4 text-gray-400 hover:text-orange-500" />
          </div>
          {/* Iconos interactivos */}
          
          <Link  k href="/ruta-carrito">
            <ShoppingCartIcon className="w-6 h-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
          </Link>
          {/* Menú de usuario */}
          <UserMenu />
        </div>

        {/* Botón para abrir el menú en dispositivos móviles */}
    

        {/* Menú desplegable para dispositivos móviles */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="absolute right-0 mt-36 py-2 w-48 bg-white rounded-md shadow-xl z-20 md:hidden">
            {/* Enlaces del menú móvil */}
            <Link href="/ruta-popular">
              <h3 className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white cursor-pointer">Popular</h3>
            </Link>
            <Link href="/ruta-catalogo">
              <h3 className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white cursor-pointer">Catálogo</h3>
            </Link>
            <Link href="/ruta-notificaciones">
              <h3 className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white cursor-pointer">Notificaciones</h3>
            </Link>
            <Link href="/ruta-carrito">
              <h3 className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white cursor-pointer">Carrito</h3>
            </Link>
            <Link href="/ruta-ingresar">
              <h3 className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white cursor-pointer">Ingresar</h3>
            </Link>
            <Link href="/ruta-registrarse">
              <h3 className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white cursor-pointer">Registrarse</h3>
            </Link>
          </div>
        )}
      </nav>
    </nav>
  );
}