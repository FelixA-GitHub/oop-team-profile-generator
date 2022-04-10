// const fs = require('fs');

// const writeFile = fileContent => {
//     //new creates new Promise object which acts like a container
//     //that allows us to run code that at some point will be pending
//     //or 'waiting for a response'
//     //useful for http requests like fetch() or setTimeout()
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/index.html', fileContent, err => {
//           // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//           if (err) {
//             reject(err);
//             // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//             return;
//           }
    
//           // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//           resolve({
//             ok: true,
//             message: 'File created!'
//           });
//         });
//       });
//     };

// const copyFile = () => {
//     return new Promise((resolve, reject) => {
//         fs.copyFile('./dist/index.html', fileContent, err => {
//             // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//             if (err) {
//               reject(err);
//               // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//               return;
//             }
      
//             // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//             resolve({
//               ok: true,
//               message: 'File copied!'
//             });
//           });
//         });
//       };

// module.exports = { writeFile, copyFile };