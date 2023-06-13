import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Message from "./Message";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
