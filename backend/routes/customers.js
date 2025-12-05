import express from 'express';
const router = express.Router();
import checkCustomerExists from '../middlewares/checkCustomer.js';
import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomer,
} from '../controllers/customers.js';

router.get('/', getAllCustomers);
router.get('/:id', checkCustomerExists, getCustomerById);
router.post('/', createCustomer);
router.delete('/:id', checkCustomerExists, deleteCustomer);

export default router;