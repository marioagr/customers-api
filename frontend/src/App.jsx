import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import CustomerDetail from "./components/CustomerDetail";
import CustomerCreate from "./components/CustomerCreate";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Customer Management</h1>
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/customers/:id" element={<CustomerDetail />} />
          <Route path="/customers/create" element={<CustomerCreate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
