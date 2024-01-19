import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App1';
import { BrowserRouter } from "react-router-dom"

// Creating a root for rendering React components
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within the BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
