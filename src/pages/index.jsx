import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Register } from "./Register";
import { Login } from "./Login";

export const Pages = () => (
    <Router>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);