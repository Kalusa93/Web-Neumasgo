const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {

    products: (req, res) => {
        res.render('products/products', {title: 'Productos', css: 'products.css', products});
    },

    neumaticos: (req, res) => {
        let neumaticos = products.filter( product => product.category == 'Neumáticos')

        res.render('products/products', {title: 'Neumáticos', css: 'products.css', products: neumaticos});
    },

    cubiertasCamioneta: (req, res) => {
        let imported = products.filter( product => product.category == 'international')

        res.render('products/products', {title: 'Camioneta', css: 'products.css', cubiertasCamioneta});
    },

    cubiertasCamion: (req, res) => {
        let imported = products.filter( product => product.category == 'international')

        res.render('products/products', {title: 'Camion', css: 'products.css', cubiertasCamioneta});
    },
    
    cubiertasVial: (req, res) => {
        let imported = products.filter( product => product.category == 'international')

        res.render('products/products', {title: 'Vial', css: 'products.css', cubiertasCamioneta});
    },

    detail: (req, res) => {
        const id = req.params.id;

        const product = products.find((product) => product.id == id);

        res.render('products/productDetail', {title: 'Detalle de Producto', css: 'productDetail.css', product});
    },

    add: (req, res) => {
        res.render('products/addProduct', {title: 'Agregar Productos', css: 'addProduct.css'});
    },
    
    create: (req, res) => {
        const image = req.file ? req.file.filename : "default-image.png";
        
        const newProduct = {
            id: products[products.length - 1].id + 1,
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            origin: req.body.origin,
            varieties: req.body.varieties,
            tall: req.body.tall,
            description: req.body.description,
            image,
        };

        products.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(products));

        res.redirect("/products");
    },
    
    edit: (req, res) => {
        let id = req.params.id;

        let productToEdit = products.find(p => p.id == id);

        res.render('products/editProduct', {title: 'Editar Productos', css: 'editProduct.css', productToEdit});
    },
    
    update: (req, res) => {
        let indice = products.findIndex(p => p.id == req.params.id);
        
        products[indice].name = req.body.name
        products[indice].category = req.body.category
        products[indice].price = req.body.price
        products[indice].origin = req.body.origin
        products[indice].varieties = req.body.varieties
        products[indice].tall = req.body.tall
        products[indice].description = req.body.description

        if(req.file)  products[indice].image = req.file.filename;

        fs.writeFileSync(productsFilePath, JSON.stringify(products));

        res.redirect("/products");
    },

    delete: (req, res) => {
        let indice = products.findIndex(p => p.id == req.params.id);

        products.splice(indice, 1);

        fs.writeFileSync(productsFilePath, JSON.stringify(products));

        res.redirect("/products");
    }
};

module.exports = productsController;