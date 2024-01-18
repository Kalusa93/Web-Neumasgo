//Sección de Requerimiento de Módulos
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

//Sección de Configuración de Carpeta de Archivos Estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));


//Sección de Configuración de Motor de Plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

//Sección de Requerimiento de Rutas
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
//const cartRouter = require('./routes/cart');
const usersRouter = require('./routes/users');

//Sección de Rutas
app.use('/', mainRouter);
app.use('/products', productsRouter);
//app.use('/cart', cartRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
    res.status(404).render("not-found");
});


//Sección de levantar el Server
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/')
});