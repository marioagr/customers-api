import { getAllCustomers as getAllCustomersService, createCustomer as createCustomerService, deleteCustomer as deleteCustomerService } from "../services/customers.js";

const getAllCustomers = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const result = getAllCustomersService(page, limit);
  res.json(result);
};

const getCustomerById = (req, res) => {
  res.json(req.customer);
};

const createCustomer = (req, res) => {
  const result = createCustomerService(req.body);
  if (!result.success) {
    return res.status(400).json({ message: "Validation error", errors: result.errors });
  }
  res.status(201).json(result.data);
};

const deleteCustomer = (req, res) => {
  deleteCustomerService(req.customerIndex);
  res.json({ message: "Customer deleted" });
};

export {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomer,
};

