const controller = require('../controllers/usersController');
const { Router } = require('express');
const router = Router();

const routes = {
    registerRoute: '/register',
    loginRoute: '/login',
};

router.get(routes.registerRoute, controller.registerController);

router.get(routes.loginRoute, controller.loginController);

module.exports = router;