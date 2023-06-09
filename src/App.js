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
import PermScreen from "./screens/perm/perm";

const App = () => {

    const store = useStore()
    return (
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/uploadDocument" element={ <DocScreen />} />
            <Route path="/verifyAdhaar" element={ <VerifyAdhaar />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/permissions" element={<ManageScreen />} />
            <Route path="/sdk" element={<SDKLogin />} />
            <Route path="/perm" element={<PermScreen />} />
        </Routes>

    );
}

export default App;
