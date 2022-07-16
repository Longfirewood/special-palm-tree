const fs = require('fs');

// fs.readFile('./test.txt', (err, data) => {
//     if(err){
//         console.log('err')
//     }
//     console.log(data.toString());
// })

// fs.writeFile('./writeFile.txt', 'NEW HELLO AGAIN', () => {
//     console.log('Success')
// })
fs.mkdir(
    './assets',
    (err) => {
        if(err){
            console.log('Error exist');
        }
        fs.writeFile('./assets/writeFile.txt', 'NEW HELLO AGAIN', () => {
        console.log('Success')
    })
    }
)