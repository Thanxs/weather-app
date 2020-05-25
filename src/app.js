const express = require('express');
const { join } = require('path');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

const publicDirectory = join(__dirname, '../public');
const viewsPath = join(__dirname, '../templates/views');
const partilsPath = join(__dirname, '../templates/partials');

app.use(express.static(publicDirectory));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partilsPath);

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'ALex Nikolskyi'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'ALex Nikolskyi'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        info: 'This information can help you',
        name: 'ALex Nikolskyi'      
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        });
    }

    res.send({
        forecast: 'It is sunny',
        location: 'Odessa',
        address: req.query.address        
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        });
    }

    res.send({
        products: []
    });
});

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: 'Help page Error',
        info: 'Help article does not exist',
        name: 'Alex Nikolskyi'
    });
});

app.get('*', (req, res) => {
    res.render('error', {
        title: 'Error',
        info: 'Error 404: page not found.',
        name: 'Alex Nikolskyi'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});