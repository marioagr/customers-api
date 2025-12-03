import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CustomerDetail = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/customers/${id}`)
      .then((response) => response.json())
      .then((data) => setCustomer(data));
  }, [id]);

  if (!customer) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            {customer.image && !imageError ? (
              <img
                src={customer.image}
                alt={`${customer.first_name} ${customer.last_name}`}
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-64 md:h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                No image available
              </div>
            )}
          </div>
          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Customer Detail</h2>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-gray-200">ID:</span> {customer.id}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-gray-200">First Name:</span> {customer.first_name}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-gray-200">Last Name:</span> {customer.last_name}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-gray-200">Email:</span> {customer.email}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-gray-200">Gender:</span> {customer.gender}
              </p>
            </div>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-block bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Back to List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
