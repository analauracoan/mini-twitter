export const PrimaryButton = ({ type = "button", children }) => {
    return (
      <button
        type={type}
        className="w-full py-3 mt-2 text-white bg-sky-600 hover:bg-sky-700 transition-all duration-200 rounded-xl font-semibold shadow hover:shadow-lg"
      >
        {children}
      </button>
    );
  };
  