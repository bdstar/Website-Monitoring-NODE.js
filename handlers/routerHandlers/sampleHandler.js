/**
 * @author Md. Abdullah al Mamun
 * @email mamunbd.ruet@gmail.com
 * @create date 2021-10-08 22:01:11
 * @modify date 2021-10-08 22:30:03
 * @title Sample Handler
 * @desc Sample Handler
 */

//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    //console.log(requestProperties);
    callback(200, {
        message: "This is a sample url",
    });
}

module.exports = handler;
