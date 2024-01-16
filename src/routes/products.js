const controller = require('../controllers/productsController');
const { Router } = require('express');
const router = Router();
const multer = require('multer');
const path = require('path');

// MULTER - Manejo del almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "../../public/img/products"));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });


const routes = {
    home: '/',
    neumaticos: '/neumaticos',
    neumaticosAuto: '/neumaticos/auto',
    neumaticosCamioneta: '/neumaticos/camioneta',
    neumaticosAuto: '/neumaticos/auto',
    neumaticosCamioneta: '/neumaticos/camioneta',
    neumaticosCamion: '/neumaticos/camion',
    neumaticosVial: '/neumaticos/vial',
    aceites: '/aceites',
    baterias: '/baterias',
    detail: '/detail/:id',
    add: '/add',
    edit: '/edit/:id',
    delete: '/delete/:id',
};

// GET PRODUCTS
router.get(routes.home, controller.products);

router.get(routes.neumaticos, controller.neumaticos);

router.get(routes.neumaticosAuto, controller.neumaticosAuto);

router.get(routes.neumaticosCamioneta, controller.neumaticosCamioneta);

router.get(routes.neumaticosCamion, controller.neumaticosCamion);

router.get(routes.neumaticosVial, controller.neumaticosVial);

router.get(routes.aceites, controller.aceites);

router.get(routes.baterias, controller.baterias);

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