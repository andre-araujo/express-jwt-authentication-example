const passport = require('passport');
const { NOT_FOUND } = require('../constants');

const jwtMiddleware = require('../middlewares/passportJWT.middleware');
const authentication = require('../middlewares/authentication.middleware');

passport.use(jwtMiddleware);

app.use(passport.initialize());

app.get('/api/account/me', authentication, require('../controllers/account.controller'));
app.post('/api/account/singup', require('../controllers/singup.controller'));
app.post('/api/account/token', require('../controllers/token.controller'));

app.all('*', (req, res) => {
    res.status(404).send({
        status: NOT_FOUND,
    });
});
