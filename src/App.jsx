import { BrowserRouter as Router, Routes, Route } from "react-router";

// Layout
import Hero from "./layout/Hero";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import Header from "./layout/Header";

function App() {
  return (
    <Router>
        <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
