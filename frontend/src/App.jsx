import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import CustomerDetail from "./components/CustomerDetail";
import CustomerCreate from "./components/CustomerCreate";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">Customer Management</h1>
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
