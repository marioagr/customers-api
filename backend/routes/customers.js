import express from 'express';
const router = express.Router();
import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomer,
} from '../controllers/customers.js';

router.get('/', getAllCustomers);
router.get('/:id', getCustomerById);
router.post('/', createCustomer);
router.delete('/:id', deleteCustomer);

export default router;