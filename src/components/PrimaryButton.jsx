import classNames from "classnames";

export const PrimaryButton = ({ request = false, type = "button", children }) => {
  return (
    <button
      type={type}
      className={classNames(
        "w-full py-3 mt-2 rounded-xl font-semibold shadow transition-all duration-200 flex justify-center items-center",
        {
          "bg-sky-600 hover:bg-sky-700 text-white hover:shadow-lg": !request,
          "bg-slate-300 text-slate-500 cursor-not-allowed": request,
        }
      )}
      disabled={request}
    >
      {request ? (
        <div className="h-5 w-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        children
      )}
    </button>
  );
};
