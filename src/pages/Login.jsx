import { useForm } from "react-hook-form";
import { InputField } from "../components/InputField";
import { PrimaryButton } from "../components/PrimaryButton";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (!user.emailVerified) {
          alert("⚠️ Seu e-mail ainda não foi verificado. Verifique sua caixa de entrada ou spam.");
          return;
        }

        localStorage.setItem("access-token", user.accessToken);
        navigate("/");
      })
      .catch((error) => {
        let message = "Erro ao fazer login.";

        switch (error.code) {
          case "auth/user-not-found":
            message = "Usuário não encontrado.";
            break;
          case "auth/wrong-password":
            message = "Senha incorreta.";
            break;
          case "auth/invalid-email":
            message = "E-mail inválido.";
            break;
          default:
            message = "Erro: " + error.message;
        }

        alert(message);
      });
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
        }}
        error={errors.password}
      />

      <PrimaryButton type="submit">Entrar</PrimaryButton>

      <p className="text-sm text-gray-600 text-center mt-4">
        Ainda não tem uma conta?{" "}
        <Link to="/register" className="text-sky-600 hover:underline font-medium">
          Crie agora!
        </Link>
      </p>
    </form>
  );
};
