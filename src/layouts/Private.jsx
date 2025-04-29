// src/layouts/Private.jsx
import PropTypes from "prop-types";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

export const Private = ({ children }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header userEmail={user?.email} onLogout={handleLogout} />
      {children}
    </div>
  );
};

Private.propTypes = {
  children: PropTypes.node.isRequired,
};
