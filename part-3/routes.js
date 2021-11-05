/**
 * @author Md. Abdullah al Mamun
 * @email mamunbd.ruet@gmail.com
 * @create date 2021-10-08 21:57:10
 * @modify date 2021-10-12 22:46:43
 * @title Routes
 * @desc Application Routes
 */

// Dependencies
const {sampleHandler} = require('./handlers/routerHandlers/sampleHandler');
const {userHandler} = require('./handlers/routerHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler
    
}

module.exports = routes;