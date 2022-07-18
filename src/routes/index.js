// Local Imports
const { EnvConfig } = require('../config');
const auth = require('./auth');
const user = require('./user');

const apiRoutePrefix = EnvConfig.CONST_CREDENTIALS.API_ROUTR_PREFIX;

module.exports = (app) => {
    app.use(apiRoutePrefix, auth);
    app.use(apiRoutePrefix, user);
};