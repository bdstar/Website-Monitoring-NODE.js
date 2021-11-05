/**
 * @author Md. Abdullah al Mamun
 * @email mamunbd.ruet@gmail.com
 * @create date 2021-10-08 21:44:24
 * @modify date 2021-10-10 23:02:36
 * @title Handle Request Response
 * @desc Helper Section to handle request response
 */

//Dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder'); 
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routerHandlers/notFoundHandler');
const {parseJSON} = require('../helpers/utilities');

// module scaffolding
const handler = {};

// handle Request Response
handler.handleReqRes = (req, res) => {
    /* START: request handling */
    // get the url and parse it 
    const parseUrl = url.parse(req.url, true);
    //console.log(parseUrl);
    const path = parseUrl.pathname;
    //console.log(path);
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    //console.log(trimmedPath);

    //url query string object
    const queryStringObject = parseUrl.query;
    //console.log(queryStringObject);

    //get url Header Object
    const headersObject = req.headers;
    //console.log(headersObject);

    //url method detection
    const method = req.method.toLowerCase();
    /* END: request handling */


    /* START: Handling request routes */
    const requestProperties = {
      parseUrl,
      path,
      trimmedPath,
      method,
      queryStringObject,
      headersObject  
    };

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    

    /* END: Handling request routes */    
    
    /* START: Handling request stream and buffer */
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    
    req.on('data', (buffer)=>{
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        //console.log(realData);

        requestProperties.body = parseJSON(realData);
        
        chosenHandler(requestProperties, (statusCode, payload) =>{
            statusCode = (typeof(statusCode) === 'number') ? statusCode : 500; 
            payload = (typeof(payload) === 'object') ? payload : {};
       
            const payloadString = JSON.stringify(payload);
            
            // return the final response
            res.setHeader('Content-Type','application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
        });        
    });
    /* End: Handling request stream and buffer */
    
    //response handle
    //res.end('Hello YouTube');
}


module.exports = handler; 