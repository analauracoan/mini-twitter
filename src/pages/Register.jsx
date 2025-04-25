import { useForm } from "react-hook-form";
import { Public } from "../layouts/Public";
import Logo from "/logo.svg";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("📦 Dados enviados:", data);
  };

  return (
    <Public>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-rose-50 px-4">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-white/30 transition-all">
          
          <div className="flex flex-col items-center mb-6">
            <img
              src={Logo}
              alt="Mini Twitter Logo"
              className="w-16 h-16 mb-3 drop-shadow"
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-sky-600 text-center">
              Criar conta
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="E-mail"
                {...register("email", {
                  required: "E-mail é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "E-mail inválido",
                  },
                })}
                className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base ${
                  errors.email ? "border-red-400" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-sky-300`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Senha"
                {...register("password", {
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "Senha deve ter pelo menos 6 caracteres",
                  },
                })}
                className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base ${
                  errors.password ? "border-red-400" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-sky-300`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 text-white bg-sky-600 hover:bg-sky-700 transition-all duration-200 rounded-xl font-semibold shadow hover:shadow-lg"
            >
              Criar uma nova conta
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              Já possui uma conta?{" "}
              <a href="/login" className="text-sky-600 hover:underline font-medium">
                Acesse agora!
              </a>
            </p>
          </form>
        </div>
      </div>
    </Public>
  );
};
