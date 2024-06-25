import "./App.scss";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact"
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header className="app__header">
          <Header />
        </header>
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/about" element={ <About />} />
            <Route path="/resume" element={ <Resume />} />
            <Route path="/contact" element={ <Contact />} />
            <Route path="*" element={ <NotFound />} />
          </Routes>
        </div>
        <footer className="app__footer">
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
