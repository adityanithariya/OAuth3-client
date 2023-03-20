import "./App.css";
import React, { useEffect } from "react";
import LoginScreen from "./screens/login/login";
import { Route, Routes } from "react-router-dom"
import DocScreen from "./screens/docScreen.js/docScreen";
import VerifyAdhaar from "./screens/docScreen.js/verifyPage";
import Dashboard from "./screens/dashboard/dashboard";
import { useStore } from "./app/useStore";

const App = () => {

    const store = useStore()

    const loggedIn = store.loggedIn





    return (
        <Routes>
            <Route path="/" element={loggedIn ? <Dashboard /> : <LoginScreen />} />
            <Route path="/uploadDocument" element={ <DocScreen />} />
            <Route path="/verifyAdhaar" element={ <VerifyAdhaar />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

    );
}

export default App;
