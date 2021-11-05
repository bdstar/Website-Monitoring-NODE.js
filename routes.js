/**
 * @author Md. Abdullah al Mamun
 * @email mamunbd.ruet@gmail.com
 * @create date 2021-10-08 21:57:10
 * @modify date 2021-10-13 22:25:41
 * @title Routes
 * @desc Application Routes
 */

// Dependencies
const {sampleHandler} = require('./handlers/routerHandlers/sampleHandler');
const {userHandler} = require('./handlers/routerHandlers/userHandler');
const {tokenHandler} = require('./handlers/routerHandlers/tokenHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler
}

module.exports = routes;