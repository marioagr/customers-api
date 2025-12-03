import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  gender: z.enum(["Male", "Female"], "Please select a valid gender"),
  image: z.string().url("Invalid URL"),
});

const CustomerCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch("http://localhost:3000/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => navigate("/"));
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Customer</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="first_name" className="block text-gray-700 text-sm font-medium mb-2">First Name:</label>
          <input
            id="first_name"
            {...register("first_name")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="last_name" className="block text-gray-700 text-sm font-medium mb-2">Last Name:</label>
          <input
            id="last_name"
            {...register("last_name")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
          <input
            id="email"
            {...register("email")}
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 text-sm font-medium mb-2">Gender:</label>
          <select
            id="gender"
            {...register("gender")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 text-sm font-medium mb-2">Image URL:</label>
          <input
            id="image"
            {...register("image")}
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CustomerCreate;
