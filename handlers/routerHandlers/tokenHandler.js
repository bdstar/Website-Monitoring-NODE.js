/**
 * @author Md. Abdullah al Mamun
 * @email mamunbd.ruet@gmail.com
 * @create date 2021-10-13 22:17:31
 * @modify date 2021-10-13 22:35:29
 * @title Token Handler
 * @desc Generate token for all Handler
 */



// dependencies
const data = require('../../lib/data');
const { hash } = require('../../helpers/utilities');
//const { parseJSON } = require('../../helpers/utilities');

// module scaffolding
const handler = {};

handler.tokenHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._token[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._token = {};

// Create a New user
handler._token.post = (requestProperties, callback) => { 
    const phone = (typeof(requestProperties.body.phone) ==='string' && requestProperties.body.phone.trim().length == 11 ) ? requestProperties.body.phone : false;    
    const password = (typeof(requestProperties.body.password) ==='string' && requestProperties.body.password.trim().length > 0 ) ? requestProperties.body.password : false;
    if(phone && password){
        data.read('users',phone, (err1, userData)=>{
            let hasedPassword = hash(password);
            if(hasedPassword === userData.password){
                let tokenId = 
            }else{
                callback(400, {
                    error: 'Password is not valid!',
                });  
            }
        });
    }else{
        callback(400, {
            error: 'You have a problem in your request',
        });
    }
};

// Get user data
handler._token.get = (requestProperties, callback) => {
};

// Update existing user
handler._token.put = (requestProperties, callback) => {
};

// Delete existing user
handler._token.delete = (requestProperties, callback) => {
};

module.exports = handler;