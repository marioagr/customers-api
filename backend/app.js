import express from 'express';
import cors from 'cors';
import customersRouter from './routes/customers.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Customer API is running. Visit http://localhost:5173 for the frontend.' });
});
app.use('/customers', customersRouter);

export default app;