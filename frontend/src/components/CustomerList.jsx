import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination.jsx";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [pagination, setPagination] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    fetch(`http://localhost:3000/customers?page=${page}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data.data);
        setPagination(data.pagination);
      });
  }, [page, limit]);

  const handleImageError = (customerId) => {
    setImageErrors(prev => ({ ...prev, [customerId]: true }));
  };

  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Customer List</h2>
        <div className="flex items-center space-x-4">
          <label htmlFor="limit" className="text-gray-700 dark:text-gray-300">Items per page:</label>
          <select
            id="limit"
            value={limit}
            onChange={handleLimitChange}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={100}>100</option>
          </select>
          <Link
            to="/customers/create"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Create New Customer
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <Link
            to={`/customers/${customer.id}`}
            key={customer.id}
            className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-200"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
              {customer.image && !imageErrors[customer.id] ? (
                <img
                  src={customer.image}
                  alt={`${customer.first_name} ${customer.last_name}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  onError={() => handleImageError(customer.id)}
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  No image available
                </div>
              )}
              <div className="p-4 text-gray-800 dark:text-gray-200">
                {customer.first_name} {customer.last_name}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {pagination.totalPages > 1 && (
        <Pagination
          pagination={pagination}
          page={page}
          onPageChange={handlePageChange}
        />
      )}
    </div >
  );
};

export default CustomerList;
