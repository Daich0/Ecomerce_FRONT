
'use client'
import { useState,useEffect } from 'react';

import axios from 'axios';

function page() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:8080/personas');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Error al obtener a los usuarios:', error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
         
            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6">Nombre</th>
                            <th className="py-3 pr-6">Gmail</th>
                            <th className="py-3 pr-6">Rol</th>
                           
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{usuario.nombre}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{usuario.email}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-full font-semibold text-xs ${usuario.rol == "Admin" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
                                            {usuario.rol}
                                        </span>
                                    </td>
                                   
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default page