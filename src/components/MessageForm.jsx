import { useForm } from "react-hook-form";

export default function MessageForm({ onSendMessage, disabled }) {
  const { register, handleSubmit, watch, reset } = useForm();
  const message = watch("message") || "";

  const onSubmit = (data) => {
    if (disabled) return; 
    onSendMessage(data.message);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`mb-6 bg-white p-4 rounded shadow ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <textarea
        {...register("message", { required: true, maxLength: 255 })}
        placeholder={
          disabled ? "Você precisa verificar seu e-mail para publicar." : "Digite seu mini tweet..."
        }
        className="w-full border rounded p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        disabled={disabled}
      />
      <div className="flex justify-between items-center mt-2 text-sm">
        <span className="text-green-600">
          Você ainda pode digitar {255 - message.length} caracteres
        </span>
        <button
          type="submit"
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 disabled:opacity-60"
          disabled={disabled}
        >
          Publicar
        </button>
      </div>
    </form>
  );
}
