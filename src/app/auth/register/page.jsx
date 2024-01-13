"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";


function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  //Aqui se hashea la contraseña
 

  const onSubmit = handleSubmit(async (data) => {
   console.log(data);
    const res = await fetch("http://localhost:8080/personas", {
      method: "POST",
      body: JSON.stringify({
        nombre: data.nombre,
        rol:data.rol,
        email:data.email,
        password: data.password,         
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  console.log(errors);

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>

        <label htmlFor="nombre" className="text-slate-500 mb-2 block text-sm">
          Nombre:
        </label>
        <input
          type="text"
          
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="nombre"
        />

        {errors.nombre && (
          <span className="text-red-500 text-xs">
            {errors.nombre.message}
          </span>
        )}


          

<label htmlFor="rol" className="text-slate-500 mb-2 block text-sm">
          rol:
        </label>
        <input
          type="text"
          {...register("rol", {
            required: {
              value: true,
              message: "rol is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="rol"
        />
        {errors.rol && (
          <span className="text-red-500 text-xs">{errors.rol.message}</span>
        )}

<label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="user@email.com"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors. email.message}</span>
        )}

        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="********"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

      

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Register
        </button>
      </form>
    </div>
  );
}
export default RegisterPage;