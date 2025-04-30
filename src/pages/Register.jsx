import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../components/InputField";
import { PrimaryButton } from "../components/PrimaryButton";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
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
    setRequesting(true);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((credential) => {
        const user = credential.user;

        // Envia e-mail de verificação
        sendEmailVerification(user)
          .then(() => {
            alert("Verificação enviada. Verifique seu e-mail antes de continuar.");
            navigate("/login");
          })
          .catch((err) => console.error("Erro ao enviar verificação:", err));
      })
      .catch((error) => console.error(error.message))
      .finally(() => setRequesting(false));
  };

  return (
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
  );
};
