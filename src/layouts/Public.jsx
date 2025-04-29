import PropTypes from "prop-types";
import Logo from "/logo.svg";

export const Public = ({ title, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-rose-50 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-white/30 transition-all">
        
        <div className="flex flex-col items-center mb-6">
          <img
            src={Logo}
            alt="Mini Twitter Logo"
            className="w-16 h-16 mb-3 drop-shadow"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-sky-600 text-center">
            {title}
          </h1>
        </div>

        {children}
      </div>
    </div>
  );
};

Public.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
