/**
 * @author Md. Abdullah al Mamun
 * @email mamunbd.ruet@gmail.com
 * @create date 2021-10-08 11:15:28
 * @modify date 2021-10-09 22:58:45
 * @title Website Monitoring System
 * @desc A RESTFul API to monitor up or down time of user defined links
 */

//Dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// Testing file system to create and wite the file
/*data.create('test', 'newFile', {'name': 'Bangladesh', 'language': 'Bangla'}, (err) => {
    console.log('error was: ', err);
});*/

// Testing file system to update the file
/*data.update('test', 'newFile', {'name': 'India', 'language': 'Hindi'}, (err) => {
    console.log(err);
});*/

// Testing file system to read the file
/*data.read('test', 'newFile', (err, data) => {
    console.log(err, data);
});*/

// Testing file system to delete the file
/*data.delete('test', 'newFile', (err) => {
    console.log(err);
});*/

// handle Request Response
app.handleReqRes = handleReqRes;

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`environment variable is ${process.env.NODE_ENV}`);
        console.log(`listening to port ${environment.port}`);
        console.log(`Server running at http://${environment.hostname}:${environment.port}/`);
    })
}

//start the server
app.createServer();