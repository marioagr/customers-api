const Pagination = ({ pagination, page, onPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
      >
        Previous
      </button>
      <span className="text-gray-700 dark:text-gray-300">
        Page {pagination.page} of {pagination.totalPages}
      </span>
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === pagination.totalPages}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;