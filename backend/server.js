const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory database
let customers = [
  {
    id: 1,
    first_name: "Guy",
    last_name: "Jirieck",
    email: "gjirieck0@over-blog.com",
    gender: "Male",
    image: "https://robohash.org/enimautculpa.png?size=50x50&set=set1",
  },
  {
    id: 2,
    first_name: "Michel",
    last_name: "Yakubov",
    email: "myakubov1@facebook.com",
    gender: "Male",
    image: "https://robohash.org/similiqueipsameaque.png?size=50x50&set=set1",
  },
  {
    id: 3,
    first_name: "Rafaelia",
    last_name: "Limpkin",
    email: "rlimpkin2@elpais.com",
    gender: "Female",
    image: "https://robohash.org/aliquidquasiassumenda.png?size=50x50&set=set1",
  },
  {
    id: 4,
    first_name: "Krishnah",
    last_name: "Lannin",
    email: "klannin3@cbsnews.com",
    gender: "Male",
    image:
      "https://robohash.org/placeatdebitissuscipit.png?size=50x50&set=set1",
  },
  {
    id: 5,
    first_name: "Maurise",
    last_name: "Logg",
    email: "mlogg4@ft.com",
    gender: "Male",
    image: "https://robohash.org/voluptatesetest.png?size=50x50&set=set1",
  },
  {
    id: 6,
    first_name: "Bobbee",
    last_name: "Jereatt",
    email: "bjereatt5@nsw.gov.au",
    gender: "Female",
    image: "https://robohash.org/autvoluptatemfugit.png?size=50x50&set=set1",
  },
  {
    id: 7,
    first_name: "Rossy",
    last_name: "Dicky",
    email: "rdicky6@blogs.com",
    gender: "Male",
    image: "https://robohash.org/erroromnisplaceat.png?size=50x50&set=set1",
  },
  {
    id: 8,
    first_name: "Adrian",
    last_name: "Birds",
    email: "abirds7@sakura.ne.jp",
    gender: "Male",
    image: "https://robohash.org/corporistotamest.png?size=50x50&set=set1",
  },
  {
    id: 9,
    first_name: "Phillip",
    last_name: "Stovine",
    email: "pstovine8@amazonaws.com",
    gender: "Male",
    image: "https://robohash.org/laborenihilaut.png?size=50x50&set=set1",
  },
  {
    id: 10,
    first_name: "Dynah",
    last_name: "Fitzackerley",
    email: "dfitzackerley9@seesaa.net",
    gender: "Female",
    image:
      "https://robohash.org/temporibusvoluptasmagni.png?size=50x50&set=set1",
  },
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