//The following code shows a sample use of the async and await keywords:
// const reader = async() => {

//     try {
//         const hello = async() => {
//             return "Hello world!";
//         }
        
//         let value = await hello();
//         console.log(value)
//     } catch (e) {
//         console.log({name: e.name, message: e.message});
//     }
// }

// reader();

//The following code shows a sample use of the fs module:

// const fs = require('fs');
// fs.readFile('log.txt', {encoding: 'utf8'}, (err, data) => console.log(data));

//When fs is simply required using require('fs'), most of its methods that uses callbacks would be asynchronous.
// fs.readFile('log2.txt', {encoding: 'utf8'},(err, data) => {
//     if(err) {
//         console.log("It ain't exist brah.");
//         console.log({name: err.name});
//     }
//     return data;
// });

//Async reading data file
// const fs = require('fs/promises');
// const someFunction = async() => {
//     try {
//         const data = await fs.readFile('log.txt', {encoding: 'utf8'});
//         console.log(data);
//     } catch (error) {
//         console.log({name: error.name, message: error.message});
//     }
// }
    
// someFunction();

//Async writing data file

// const fs = require('fs/promises');

// const appendLogFile = async (content) => {
//     try {
//         await fs.writeFile('log.txt', content, {flag: 'a+'});
//     } catch (e) {
//         console.log({name: e.name, message: e.message});
//     }
// };

// appendLogFile(`Date and Time: ${new Date().toUTCString()}\n`);

const fs = require('fs/promises')
const writeJSON = async(someObject) => {
    try {
        const content = JSON.stringify(someObject);
        await fs.writeFile('votes.json', content, {flag: 'w+'});
    } catch (e) {
        console.log({name: e.name, message: e.message});
    }
};

writeJSON({
    A: 0,
    B: 0,
    C: 0
});