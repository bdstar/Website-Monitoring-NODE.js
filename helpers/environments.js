/**
 * @author Md. Abdullah al Mamun
 * @email mamunbd.ruet@gmail.com
 * @create date 2021-10-09 19:45:47
 * @modify date 2021-10-12 22:42:52
 * @title Environment 
 * @desc Handle all environment variable
 */

// Dependencies


// Module Scaffolding
const environments = {};

//Staging Configuration
environments.staging={
    port: 3000,
    hostname: '127.0.0.1',    
    envName: 'staging',
    secretKey: 'stagingpassword'
}

//Production Configuration
environments.production={
    port: 5000,
    hostname: '127.0.0.1',    
    envName: 'production',
    secretKey: 'productionpassword'
}

// determin which environment was passed
const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

//export corrosponding object
const environmentToExport = typeof environments[currentEnvironment] === 'object' ? environments[currentEnvironment] : environments.staging;
        
module.exports = environmentToExport;