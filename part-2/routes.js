/**
 * @author Md. Abdullah al Mamun
 * @email mamunbd.ruet@gmail.com
 * @create date 2021-10-08 21:57:10
 * @modify date 2021-10-08 22:07:21
 * @title Routes
 * @desc Application Routes
 */

// Dependencies
const {sampleHandler} = require('./handlers/routerHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
    
}

module.exports = routes;