import { twMerge } from "tailwind-merge";

export const InputField = ({ 
  type = "text", 
  placeholder, 
  register, 
  name, 
  validation, 
  error 
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className={twMerge(`
          w-full px-4 py-3 rounded-xl border text-sm sm:text-base
          focus:outline-none focus:ring-2 focus:ring-sky-300
          ${error ? "border-red-400" : "border-gray-200"}
        `)}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};
