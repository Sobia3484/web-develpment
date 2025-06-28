import http from 'http';
// import fs from 'fs';

const myserver = http.createServer((req, res) => {
    // const log = `${Date,now()}: New request`
    // fs.appendFile('log.txt', log, (err, data) => {
        res.write('this is a server');
        res.end();
    });
// });
 
const port = 3005;
myserver.listen((port, () =>{
    console.log('hi , i am here');
    
}))