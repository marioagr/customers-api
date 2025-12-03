import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomerList from "./components/CustomerList";
import CustomerDetail from "./components/CustomerDetail";
import CustomerCreate from "./components/CustomerCreate";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-blue-600 dark:bg-blue-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link to={'/'} className="text-3xl font-bold">Customer Management</Link>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<CustomerList />} />
            <Route path="/customers/:id" element={<CustomerDetail />} />
            <Route path="/customers/create" element={<CustomerCreate />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
