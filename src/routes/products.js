const controller = require('../controllers/productsController');
const { Router } = require('express');
const router = Router();
const multer = require('multer');
const path = require('path');

// MULTER - Manejo del almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "../../public/images/products"));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });


const routes = {
    home: '/',
    cubiertasAuto: '/cubiertas-auto',
    cubiertasCamioneta: '/cubiertas-camioneta',
    detail: '/detail/:id',
    add: '/add',
    edit: '/edit/:id',
    delete: '/delete/:id',
};

// GET PRODUCTS
router.get(routes.home, controller.products);

router.get(routes.cubiertasAuto, controller.cubiertasAuto);

router.get(routes.cubiertasCamioneta, controller.cubiertasCamioneta);

router.get(routes.detail, controller.detail);

// ADD PRODUCTS
router.get(routes.add, controller.add);

router.post(routes.add, upload.single('image'), controller.create);

//EDIT PRODUCTS
router.get(routes.edit, controller.edit);
router.put(routes.edit, upload.single('image'), controller.update);

// DELETE PRODUCT
router.delete(routes.delete, controller.delete);

module.exports = router;