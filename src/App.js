import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./pages/dashboard";
import GlobalStyle from "./globalStyle";
import About from "./pages/about";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact/>} />            
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
