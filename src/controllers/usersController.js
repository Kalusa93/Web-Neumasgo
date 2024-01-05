const usersController = {
    registerController: (req, res) => {
        res.render('users/register', {title: 'Registrate', css: 'register.css'});
    },
    loginController: (req, res) => {
        res.render('users/login', {title: 'Ingresá', css: 'login.css'});
    }
};

module.exports = usersController;