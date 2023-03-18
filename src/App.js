import "./App.css";
import LoginScreen from "./screens/login/login";
import RegisterationScreen from "./screens/register/register";
import { Route, Routes } from "react-router-dom"
import DocScreen from "./screens/docScreen.js/docScreen";
import VerifyAdhaar from "./screens/docScreen.js/verifyPage";
import Dashboard from "./screens/dashboard/dashboard";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterationScreen />} />
            <Route path="/uploadDocument" element={<DocScreen />} />
            <Route path="/verifyAdhaar" element={<VerifyAdhaar />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

    );
}

export default App;
