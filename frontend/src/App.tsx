import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import AuthRoute from "route/AuthRoute";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import RecoverPassword from "pages/recover-password/RecoverPassword";

import Home from "pages/home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
                <Route path="/recover-password" Component={RecoverPassword} />

                {/* Private Routes */}
                <Route
                    path="/home"
                    Component={() => (
                        // <AuthRoute>
                            <Home />
                        // </AuthRoute>
                    )}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
