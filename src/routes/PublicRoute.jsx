import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-rose-50 px-4">
        <p className="text-xl font-medium text-sky-600 animate-pulse">
          Carregando...
        </p>
      </div>
    );

  return !user ? children : <Navigate to="/" />;
};
