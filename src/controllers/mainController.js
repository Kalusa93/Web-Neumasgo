const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
    home: (req, res) => {
        res.render('home', {title: 'Neumáticos Santiago', css: 'home.css'});
    },

    about: (req, res) => {
        res.render('nosotros', {title: 'Sobre Nosotros', css:'nosotros.css'});
    },

    contact: (req, res) => {
        res.render('contacto', {title: 'Contacto', css: 'contacto.css'});
    },

    services: (req, res) => {
        res.render('servicios', {title: 'Servicios', css: 'servicios.css'});
    },

    /* search: (req, res) => {
        let words = req.query.keywords;

        let search = products.filter(p => p.name.toLowerCase().includes(words.toLowerCase()))

        res.render('search', {title: 'Resultados de la busqueda', css:'products.css', products: search})
    } */
};

module.exports = controller;