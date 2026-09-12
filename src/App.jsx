import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-layout">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
