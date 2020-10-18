const express = require('express');
const uuid = require('uuid').v4;
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const data = [
    {
        title: "Shira's Fable",
        nav: [
            'Home', 
            'Shop', 
            'Blog', 
            'About', 
            'Contact',
        ]

    }
]

app.get('/data', (req, res) => {
    res.json(data)
})

const port = 3000;

app.listen(port, () => {
    console.log(`Now listening on Port ${port}`)
})