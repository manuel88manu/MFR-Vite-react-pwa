import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import{BrowserRouter, Routes, Route}from "react-router-dom";
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="expenses" element={<Expenses/>}/>
      <Route path="invoices" element={<Invoices/>}/>
  </Routes>
  </BrowserRouter>
)
