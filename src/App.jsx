import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { OTPPage } from "./pages/OTPPage";
import { NewPasswordPage } from "./pages/NewPasswordPage";

function App() {
  return (
    <>
      <Navbar />

      <main className="app-layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<OTPPage />} />
          <Route path="/new-password" element={<NewPasswordPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
