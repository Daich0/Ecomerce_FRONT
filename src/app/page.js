/* import Image from 'next/image'
import Card from '../components/cards';
import Register from '../app/auth/register/page';
export default function Home() {
  return (
    <main >
       del main :className="flex min-h-screen flex-col items-center justify-between w-full p-24"
       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       <Card/>
      </div> 

//       <Register/> 
  

      
    </main>
  )
}
 */
"use client"; 

import React, { useState, useEffect, useCallback } from 'react';
import ProductList from '../components/ProductList'; // Importa el componente ProductList
import Navega from '../components/Navega'; // Importa el componente Navega

// Datos del producto que se mostrará en la lista


const productsPerPage = 20; // Número de productos por página
const totalPages = 5; // Total de páginas disponibles

// Función para generar una lista de productos basada en el número de página
const generateProductList = (pageNumber) => {
  return Array.from({ length: pageNumber * productsPerPage }, () => product);
};

function Page() {
  // Estados para la página actual y la lista de productos
  const [currentPage, setCurrentPage] = useState(1); // Estado para controlar la página actual
  //const [productList, setProductList] = useState(generateProductList(1)); // Estado para la lista de productos

  // Función para cargar más productos cuando se desplace hacia abajo
  const loadMoreProducts = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1); // Incrementa la página actual
    }
  }, [currentPage]);

  // Efecto para actualizar la lista de productos cuando cambia la página actual
  /* useEffect(() => {
    setProductList(generateProductList(currentPage)); // Actualiza la lista de productos
  }, [currentPage]); */

  // Efecto para manejar el desplazamiento de la ventana y cargar más productos
/*   useEffect(() => {
    const handleScroll = () => {
      // Verifica si el usuario ha desplazado hasta el final de la página
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        loadMoreProducts(); // Carga más productos
      }
    };

    window.addEventListener('scroll', handleScroll); // Agrega el manejador de eventos de desplazamiento

    // Función de limpieza para eliminar el manejador de eventos
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMoreProducts]); */

  return (
    <>
    {/*  <Navega />  Componente de navegación */}
      <br/><br/><br/><br/><br/>
      <ProductList /> {/* Lista de productos */}
    
    </>
  );
}

export default Page; 
