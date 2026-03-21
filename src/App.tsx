import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomeContent from "./pages/Home";
import Catalog from "./pages/Catalog";
import VendorProfile from "./pages/VendorProfile";
import ProductDetail from "./pages/ProductDetail";
import ComparePage from "./pages/ComparePage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <main className="relative z-0">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/vendors/:id" element={<VendorProfile />} />
            <Route path="/robots/:id" element={<ProductDetail />} />
            <Route path="/compare" element={<ComparePage />} />
          </Routes>
        </main>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;