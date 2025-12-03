import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/customers')
      .then(response => response.json())
      .then(data => setCustomers(data));
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <Link to="/customers/create">Create New Customer</Link>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            <img src={customer.image} alt={`${customer.first_name} ${customer.last_name}`} />
            <Link to={`/customers/${customer.id}`}>{customer.first_name} {customer.last_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;