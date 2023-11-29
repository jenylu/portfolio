import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Illustration from "./pages/Illustration";
import Sketchbook from "./pages/Sketchbook";
import Comics from "./pages/Comics";
import About from "./pages/About";
import IllustrationDetail from './pages/IllustrationDetail';
import ImageGrid from './components/ImageGrid';
import NavigationHeader from "./components/NavigationHeader";
import Footer from "./components/Footer";

function App() {
  return (<>
    <Router>
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<Illustration />} >
          <Route index element={<ImageGrid />} />
          <Route path="/illustration/:slug" element={<IllustrationDetail />} />
        </Route>
        <Route path="/sketchbook" element={<Sketchbook />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    <Footer />
  </>
  );
}

export default App;
