import customers from "../models/customers.js";
import { CustomerInputSchema } from '../common/index.js';

const getAllCustomers = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedCustomers = customers.slice(startIndex, endIndex);
  const total = customers.length;
  const totalPages = Math.ceil(total / limit);

  res.json({
    data: paginatedCustomers,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  });
};

const getCustomerById = (req, res) => {
  res.json(req.customer);
};

const createCustomer = (req, res) => {
  const validation = CustomerInputSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ message: "Validation error", errors: validation.error.errors });
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
  res.status(201).json(newCustomer);
};

const deleteCustomer = (req, res) => {
  customers.splice(req.customerIndex, 1);
  res.json({ message: "Customer deleted" });
};

export {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomer,
};

