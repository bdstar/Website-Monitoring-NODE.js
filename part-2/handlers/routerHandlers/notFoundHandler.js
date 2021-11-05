/**
 * @author Md. Abdullah al Mamun
 * @email mamunbd.ruet@gmail.com
 * @create date 2021-10-08 22:01:11
 * @modify date 2021-10-08 22:27:02
 * @title Not Found Handler
 * @desc 404 Not Found Handler
 */

//module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    //console.log('Not Found');
    callback(404, {
        message: 'Your Requested URL is not Found!'
    });
};

module.exports = handler;
