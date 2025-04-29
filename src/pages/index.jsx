import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Register } from "./Register";
import { Login } from "./Login";

import { Private } from "../layouts/Private";
import { Public } from "../layouts/Public";

import { PrivateRoute } from "../routes/PrivateRoute";
import { PublicRoute } from "../routes/PublicRoute";

export const Pages = () => (
    <Router>
        <Routes>
            <Route path="/register" element={
                <PublicRoute>
                    <Public title="Criar conta">
                        <Register />
                    </Public>
                </PublicRoute>
            }/>
            <Route path="/login" element={
                <PublicRoute>
                    <Public title="Acessar conta">
                        <Login />
                    </Public>
                </PublicRoute>
            }/>
            <Route path="/" element={
                <PrivateRoute>
                    <Private>
                        <Home />
                    </Private>
                </PrivateRoute> 
            }/>
            <Route path="*" element={
                <NotFound />
            }/>
        </Routes>
    </Router>
);