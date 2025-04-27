import PropTypes from "prop-types";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export const App = ({ children }) => {

    const userEmail = "seuemail@exemplo.com";
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Usuário saiu");
        navigate("/login");
      };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header userEmail={userEmail} onLogout={handleLogout} />
            {children}
        </div>
    );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};
