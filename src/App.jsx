import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> */}
            {/* other protected/product/cart routes */}
        </Routes>
    );
}

export default App;
