/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

import Navbar from "./components/Navbar";

function App() {
	const [name, setName] = useState(0);
  

	return (
		<div className='App'>
			<h1>Context API</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;
