import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Diğer sayfalar için route ekleyebilirsiniz */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;