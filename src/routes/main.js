const controller = require('../controllers/mainController');
const { Router } = require('express');
const router = Router();

const routes = {
    home: '/',
    about: '/us',
    contact: '/contact',
    services: '/services',
    //search: '/search',
};

router.get(routes.home, controller.home);

router.get(routes.about, controller.about);

router.get(routes.contact, controller.contact);

router.get(routes.services, controller.services);

//router.get(routes.search, controller.search);

module.exports = router;