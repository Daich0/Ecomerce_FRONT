import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const obtenerPersona = async (email) => {
  try {
    const response = await axios.get("http://localhost:8080/personas");
    const data = response.data;
    const userFound = data.find((user) => user.email === email);

    if (userFound) {
      console.log(userFound);
      return userFound;
    } else {
      console.log("No se encuentra email ingresado");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener email :", error);
    return null;
  }
};

export const authOptions = {
  //esta en objeto xq lo usaremos varias veces

  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        nombre: { label: "Nombre", type: "text", placeholder: "nombre" },
        rol: { label: "Rol", type: "text", placeholder: "rol" },
        email: { label: "Email", type: "text", placeholder: "tu@correo.com" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },

      async authorize(credentials, req) {
        //esperar la credenciales y la peticion dela solicitud

        const userFound = await obtenerPersona(credentials.email);

        if (!userFound) {
          console.log("No se encuentra el email ingresado");
          throw new Error("No user found");
        }

        // Comparación directa de las contraseñas en texto plano
        if (userFound.password !== credentials.password) {
          console.log("Contraseña incorrecta");
          throw new Error("Wrong password");
        }
        console.log(userFound);

        return userFound;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
