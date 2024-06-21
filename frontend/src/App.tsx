import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import RecoverPassword from "pages/recover-password/RecoverPassword";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
                <Route path="/recover-password" Component={RecoverPassword} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
