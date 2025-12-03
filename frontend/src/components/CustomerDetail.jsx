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
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
              <div className="w-full h-64 md:h-full bg-gray-200 flex items-center justify-center text-gray-500">
                No image available
              </div>
            )}
          </div>
          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Detail</h2>
            <div className="space-y-3">
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">ID:</span> {customer.id}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">First Name:</span> {customer.first_name}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Last Name:</span> {customer.last_name}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Email:</span> {customer.email}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Gender:</span> {customer.gender}
              </p>
            </div>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
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
