import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import UploadTicket from "./pages/UploadTicket";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import { AuthenticationProvider } from "./components/AuthenticationContext";

function App() {
    return (
        <AuthenticationProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/upload" element={<UploadTicket />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </AuthenticationProvider>
    );
}

export default App;
