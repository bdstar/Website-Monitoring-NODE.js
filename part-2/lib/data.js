/**
 * @author Md. Abdullah al Mamun
 * @email mamunbd.ruet@gmail.com
 * @create date 2021-10-09 21:59:49
 * @modify date 2021-10-09 22:56:52
 * @title Data handling
 * @desc Application data handling part
 */

// Dependencies
const fs = require('fs');
const path = require('path');
const { clearLine } = require('readline');

const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

// Write Data to file
lib.create = function(dir, file, data, callback){
    // open file for writing
    fs.open(lib.basedir+dir+'/'+file+'.json', 'wx', function(err, fileDescriptor){
        if(!err && fileDescriptor){
            // Convet data to string
            const stringData = JSON.stringify(data);

            // write data to file and close it
            fs.writeFile(fileDescriptor, stringData, function(err2){
                if(!err2){
                    fs.close(fileDescriptor, function(err3){
                        if(!err3){
                            callback(false);
                        }else{
                            callback('Error closing the new file!')
                        }
                    });
                }else{
                    callback('Error writing to new file');
                }
            });
        }else{
            callback('Could not create new file, it may already exists',err)
        }     
    });
}


// Read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`,'utf8', (err, data)=>{
        callback(err, data);
    })
}

// Update existing file
lib.update = (dir, file, data, callback) => {
    //File open for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', function(err, fileDescriptor){
        if(!err && fileDescriptor){
            // convert the data to string
            const stringData = JSON.stringify(data);

            //truncate the file
            fs.ftruncate(fileDescriptor, (err1) => {
                if(!err1){
                    //write to file and close it
                    fs.writeFile(fileDescriptor, stringData, (err2) => {
                        if(!err2){
                            fs.close(fileDescriptor, (err3)=>{
                                if(!err3){
                                    callback(false)
                                }else{
                                    callback('Error closing file!');
                                }
                            });
                        }else{
                            callback('Error writing to the file!');
                        }
                    })
                }else{
                    console.log('Error truncating file!');
                }
            });
        }else{
            console.log('Error updating, File may not exists!');
        }
    })
}

// Delete existing file
lib.delete = (dir, file, callback) => {
    // unlink file
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err)=>{
        if(!err){
            callback(false);
        }else{
            callback('Error deleting file!', err);
        }
    });
}

module.exports = lib;