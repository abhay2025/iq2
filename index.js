// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 5000

// to access ejs elements
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static files
app.use(express.static('public'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/masterhome')
app.set('view engine', 'ejs')

// Listen on port 5500
app.listen(port, () =>
    console.log(`app listening on port ${port}`)
)

// home page
app.get('/', (req, res) => {
    res.render('homesection/home')
})

//about page
app.get('/about', (req, res) => {
    res.render('links/about')
})

// resources page
app.get('/resource', (req, res) => {
    res.render('links/resources')
})

// Calculator
app.get('/class10thCalculator', (req, res) => {
    res.render('links/class10thCalculator')
})
app.get('/class12thCalculator', (req, res) => {
    res.render('links/class12thCalculator')
})

