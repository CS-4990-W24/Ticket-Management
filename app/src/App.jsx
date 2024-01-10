import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import UploadTicket from "./pages/UploadTicket";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import { AuthenticationProvider } from "./components/AuthenticationContext";
import CreateAccount from "./pages/Createaccount";

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
                    <Route path="/createaccount" element={<CreateAccount />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthenticationProvider>
    );
}

export default App;
