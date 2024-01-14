
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import { SearchIcon, ShoppingCartIcon, BellIcon, MenuIcon } from '@heroicons/react/outline';

import Image from 'next/image';

async function Navbar() {
  const session = await getServerSession(authOptions);
    //console.log(session.user.nombre);
 /* console.log(session);
     const nombre = session.user.name;
const rol = session.user.role;
console.log(nombre);
console.log(rol); */ 
  return (
    <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
        <div className="flex items-center space-x-4">
          <Image src="/choclito.PNG" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">LOS CHOCLITOS</h1>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* Enlaces a diferentes rutas de la aplicación */}
         
          <Link href="/">
            <h2 className="text-white hover:border-b-2 border-orange-500 px-2 cursor-pointer">Catálogo</h2>
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
          
          <Link  href="/ruta-carrito">
            <ShoppingCartIcon className="w-6 h-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
          </Link>
          {/* Menú de usuario */}
          {session?.user && (
          <>
            {/* Mostrar el nombre y rol del usuario cuando está autenticado */}
            <ul>
              <il>
              <Link href="/productos">Productos</Link>
              </il>
              <il>
              <Link href="/usuarios">Register</Link>
              </il>
            </ul>
          
            {/* Agregar el componente UserMenu aquí si es necesario */}
          </>
        )}
        </div>

      <ul className="flex gap-x-2">
        {!session?.user ? (
          <>
           
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
            <li>
              <Link href="/auth/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            
            <li>
              <Link href="/api/auth/signout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;