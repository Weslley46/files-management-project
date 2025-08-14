const fs = require('fs')
const path = require('path')


 function createDirectory(dirPath) {
       return new Promise((resolve, reject)=> {
        fs.mkdir(dirPath, { recursive: true }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`Directory created at ${dirPath}`)
            }
        });
   }); 
 }

function createFile(filePath, content = "") {
        return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, "utf8", (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`File created at ${filePath}`)
            }
        });
    });
}

function listFiles(dirPath) {
    return new Promise ((resaolve, reject)=> {
        fs.readdir (dirPath, (err, files ) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

function readFiles(dirPath) {
    return new Promise ((resolve, reject) => {
        fs.readFile(dirPath, "uft8", (err, data) =>{
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }  
          });
    });
}


function writeFile(filePath, content){
    return new Promise (( resolve, reject ) => {
         fs.writeFile(filePath, content, 'utf8', (err) => {
         if (err) {
        reject(err);
         } else {
        resolve('File written successfully');
         }    
       });
    });
}


function deleteFile(filePath) {
    return new Promise ((resolve,reject)=> {
        fs.unlink(filePath, (err)=> {
            if (err) {
                reject(err);
            } else {
                resolve( 'File deleted successfully');
            }
        });
    });
}


module.exports = { createDirectory, createFile, readFiles, writeFile, deleteFile };