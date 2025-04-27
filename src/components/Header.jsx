import PropTypes from "prop-types";

export default function Header({ userEmail, onLogout }) {
  return (
    <header className="bg-white p-4 flex justify-between items-center shadow">
      <h1 className="text-blue-500 font-bold text-xl">Mini Twitter</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">{userEmail}</span>
        <button 
          onClick={onLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Sair
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
