import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/navbar/Navbar";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> */}
                {/* other protected/product/cart routes */}
            </Routes>
        </div>
    );
}

export default App;
