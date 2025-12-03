import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CustomerDetail = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/customers/${id}`)
      .then(response => response.json())
      .then(data => setCustomer(data));
  }, [id]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div>
      <h2>Customer Detail</h2>
      <img src={customer.image} alt={`${customer.first_name} ${customer.last_name}`} />
      <p><strong>ID:</strong> {customer.id}</p>
      <p><strong>First Name:</strong> {customer.first_name}</p>
      <p><strong>Last Name:</strong> {customer.last_name}</p>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Gender:</strong> {customer.gender}</p>
      <Link to="/customers">Back to List</Link>
    </div>
  );
};

export default CustomerDetail;