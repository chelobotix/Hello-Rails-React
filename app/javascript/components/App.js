import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Message from "./Message";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Well</h1>} />
        <Route path="message" element={<h1>dsadasd</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
