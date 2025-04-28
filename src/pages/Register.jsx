import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Public } from "../layouts/Public";
import Logo from "/logo.svg";
import { InputField } from "../components/InputField";
import { PrimaryButton } from "../components/PrimaryButton";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [requesting, setRequesting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("📦 Dados enviados:", data);
    setRequesting(true);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((credential) => {
        localStorage.setItem("access-token", credential.user.accessToken);
        navigate("/");
      })
      .catch((error) => console.error(error.message))
      .finally(() => setRequesting(false));
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
            <InputField
              type="email"
              placeholder="E-mail"
              name="email"
              register={register}
              validation={{
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "E-mail inválido",
                },
              }}
              error={errors.email}
            />

            <InputField
              type="password"
              placeholder="Senha"
              name="password"
              register={register}
              validation={{
                required: "Senha é obrigatória",
                minLength: {
                  value: 6,
                  message: "Senha deve ter pelo menos 6 caracteres",
                },
              }}
              error={errors.password}
            />

            <PrimaryButton request={requesting} type="submit">
              Criar uma nova conta
            </PrimaryButton>

            <p className="text-sm text-gray-600 text-center mt-4">
              Já possui uma conta?{" "}
              <Link to="/login" className="text-sky-600 hover:underline font-medium">
                Acesse agora!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Public>
  );
};
