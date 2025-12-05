import customers from "../models/customers.js";
import { CustomerInputSchema } from '../common/index.js';

const getAllCustomers = (page = 1, limit = 3) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedCustomers = customers.slice(startIndex, endIndex);
  const total = customers.length;
  const totalPages = Math.ceil(total / limit);

  return {
    data: paginatedCustomers,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  };
};

const getCustomerById = (id) => {
  return customers.find((c) => c.id === id);
};

const createCustomer = (data) => {
  const validation = CustomerInputSchema.safeParse(data);
  if (!validation.success) {
    return { success: false, errors: validation.error.errors };
  }
  const { first_name, last_name, email, gender, image } = validation.data;
  const newId =
    customers.length > 0 ? Math.max(...customers.map((c) => c.id)) + 1 : 1;
  const newCustomer = {
    id: newId,
    first_name,
    last_name,
    email,
    gender,
    image,
  };
  customers.push(newCustomer);
  return { success: true, data: newCustomer };
};

const deleteCustomer = (index) => {
  customers.splice(index, 1);
};

export {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomer,
};