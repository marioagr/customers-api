import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  const handleImageError = (customerId) => {
    setImageErrors(prev => ({ ...prev, [customerId]: true }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Customer List</h2>
        <Link
          to="/customers/create"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Create New Customer
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <Link
            to={`/customers/${customer.id}`}
            key={customer.id}
            className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-200"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
              {customer.image && !imageErrors[customer.id] ? (
                <img
                  src={customer.image}
                  alt={`${customer.first_name} ${customer.last_name}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  onError={() => handleImageError(customer.id)}
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  No image available
                </div>
              )}
              <div className="p-4">
                {customer.first_name} {customer.last_name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div >
  );
};

export default CustomerList;
