import "./App.css";
import React, { useEffect } from "react";
import LoginScreen from "./screens/signUp/signUp";
import { Route, Routes } from "react-router-dom"
import DocScreen from "./screens/docScreen/docScreen";
import VerifyAdhaar from "./screens/docScreen/verifyPage";
import Dashboard from "./screens/dashboard/dashboard";
import { useStore } from "./app/useStore";
import Profile from "./screens/profile/profile";
import SDKLogin from "./screens/sdk/sdkLogin";
import ManageScreen from "./screens/manage/manage";

const App = () => {

    const store = useStore()

    const loggedIn = store.loggedIn

    return (
        <Routes>
            <Route path="/" element={loggedIn ? <Dashboard /> : <LoginScreen />} />
            <Route path="/uploadDocument" element={ <DocScreen />} />
            <Route path="/verifyAdhaar" element={ <VerifyAdhaar />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/permissions" element={<ManageScreen />} />
            <Route path="/sdk" element={<SDKLogin />} />
        </Routes>

    );
}

export default App;
