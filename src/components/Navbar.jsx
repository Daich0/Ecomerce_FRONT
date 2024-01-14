
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import { SearchIcon, ShoppingCartIcon, BellIcon, MenuIcon } from '@heroicons/react/outline';

import Image from 'next/image';

async function Navbar() {
  const session = await getServerSession(authOptions);
  
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-gray-950 text-white px-4 sm:px-8 md:px-16 lg:px-24 py-3">
      {/* Sección del logo y nombre de la tienda */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <Image src="/taetae.PNG" alt="Logo" width={70} height={70} />
        <h1 className="text-lg sm:text-2xl font-bold">La tiendita de la tae tae</h1>
      </div>

      {/* Sección de enlaces y búsqueda */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Enlaces a diferentes rutas de la aplicación */}
        <Link href="/">
          <h2 className="text-white hover:border-b-2 border-pink-500 px-2 cursor-pointer">Catálogo</h2>
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

        {/* Icono del carrito */}
        <Link href="/ruta-carrito">
          <h2 className="text-gray-600 hover:text-pink-500">
            <ShoppingCartIcon className="w-6 h-6" />
          </h2>
        </Link>

        {/* Menú de usuario */}
        {session?.user && (
          <div className="flex items-center space-x-4">
            <Link href="/productos">
              <h2 className="hover:border-b-2 border-pink-500">Productos</h2>
            </Link>
            <Link href="/usuarios">
              <h2 className="hover:border-b-2 border-pink-500">Register</h2>
            </Link>
          </div>
        )}
      </div>

      {/* Sección de autenticación */}
      <ul className="flex gap-x-2">
        {!session?.user ? (
          <>
            <li>
              <Link href="/auth/login">
                <h2 className="hover:border-b-2 border-pink-500 px-2">Login</h2>
              </Link>
            </li>
            <li>
              <Link href="/auth/register">
                <h2 className="hover:border-b-2 border-pink-500 px-2">Register</h2>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/api/auth/signout">
              <h2>Logout</h2>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;