import { Public } from "../layouts/Public";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <Public>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-white px-4 font-sans">
      <div className="text-center max-w-md p-8 bg-white shadow-2xl rounded-3xl border border-purple-100">
        <h1 className="text-7xl font-extrabold text-purple-500 mb-4 tracking-tight drop-shadow-sm">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-purple-800 mb-2">
          Página não encontrada
        </h2>
        <p className="text-gray-500 mb-6 leading-relaxed">
          A rota que você tentou acessar não existe. Talvez seja hora de voltar ao início e recomeçar com estilo ✨
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  </Public>
);
