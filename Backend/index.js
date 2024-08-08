import express from "express"
const app = express();
const port = 4000;

app.use(express.json());

let restaurants = [
    {
        id: 1,
        name: 'Green Garden',
        menu: ['Salad', 'Veg Burger', 'Pasta'],
        category: 'veg',
        city: 'New York',
        address: '123 Green St',
        phone: '123-456-7890'
    },
    {
        id: 2,
        name: 'Meat Feast',
        menu: ['Steak', 'Burger', 'Ribs'],
        category: 'non-veg',
        city: 'Los Angeles',
        address: '456 Meat Blvd',
        phone: '987-654-3210'
    },
    {
        id: 3,
        name: 'Fusion Delight',
        menu: ['Sushi', 'Tacos', 'Pizza'],
        category: 'both',
        city: 'Chicago',
        address: '789 Fusion Ave',
        phone: '555-123-4567'
    }
];

// Create a new restaurant
app.post('/restaurants/post', (req, res) => {
    const { name, menu, category, city, address, phone } = req.body;

    // Validate category
    if (!['veg', 'non-veg', 'both'].includes(category)) {
        return res.status(400).json({ message: 'Invalid category' });
    }

    const newRestaurant = {
        id: restaurants.length + 1,
        name,
        menu,
        category,
        city,
        address,
        phone
    };

    restaurants.push(newRestaurant);
    res.status(201).json(newRestaurant);
});

// Get all restaurants
app.get('/', (req, res) => {
    res.json(restaurants);
});

// Get a single restaurant by ID
app.get('/restaurant/:id', (req, res) => {
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
    
    if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.json(restaurant);
});

// Update a restaurant by ID
app.put('/restaurants/:id', (req, res) => {
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));

    if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
    }

    const { name, menu, category, city, address, phone } = req.body;

    // Validate category
    if (category && !['veg', 'non-veg', 'both'].includes(category)) {
        return res.status(400).json({ message: 'Invalid category' });
    }

    restaurant.name = name || restaurant.name;
    restaurant.menu = menu || restaurant.menu;
    restaurant.category = category || restaurant.category;
    restaurant.city = city || restaurant.city;
    restaurant.address = address || restaurant.address;
    restaurant.phone = phone || restaurant.phone;

    res.json(restaurant);
});

// Delete a restaurant by ID
app.delete('/restaurants/:id', (req, res) => {
    const index = restaurants.findIndex(r => r.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: 'Restaurant not found' });
    }

    restaurants.splice(index, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
