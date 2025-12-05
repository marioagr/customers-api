import customers from '../models/customers.js';

const checkCustomerExists = (req, res, next) => {
  const id = parseInt(req.params.id);
  const customer = customers.find((c) => c.id === id);
  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }
  req.customer = customer;
  req.customerIndex = customers.findIndex((c) => c.id === id);
  next();
};

export default checkCustomerExists;