import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./themes/Layout";
import Home from "./pages/Home";
import InternalAgents from "./pages/InternalAgents";
import Agents from "./pages/Agents";
import Maps from "./pages/Maps";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/agents/" element={<Agents />} />
          <Route path="/agents/:agentId" element={<InternalAgents />} />
          <Route path="/maps" element={<Maps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
