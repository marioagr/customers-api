const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory database
let customers = [
  {
    "id": 1,
    "first_name": "Guy",
    "last_name": "Doe",
    "email": "user@example.com",
    "gender": "Male",
    "image": "https://robohash.org/enimautculpa.png?size=50x50&set=set1"
  }
];

// Routes
app.get('/customers', (req, res) => {
  res.json(customers);
});

app.get('/customers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find(c => c.id === id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

app.post('/customers', (req, res) => {
  const { first_name, last_name, email, gender, image } = req.body;
  if (!first_name || !last_name || !email || !gender || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const newId = customers.length > 0 ? Math.max(...customers.map(c => c.id)) + 1 : 1;
  const newCustomer = { id: newId, first_name, last_name, email, gender, image };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

app.delete('/customers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = customers.findIndex(c => c.id === id);
  if (index !== -1) {
    customers.splice(index, 1);
    res.json({ message: 'Customer deleted' });
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});