import  http from "http";
import fs from 'fs';
import url from 'url';

const myserver =http.createServer((req , res) => {
    if(req.url === "/favicon.ico") return res.end();         //use to remove /favicon.ico from log file
    const log = `${Date.now()}: ${req.url} new request received\n`            //ya batata ha ka lo.txt file ma hum kia kia show karwana chata ha
    const myUrl = url.parse(req.url, true);          //here {true} is use to show query in this form { myname: 'sobia', userid: '4' }
    console.log(myUrl);
    
    fs.appendFile("./log.txt", log, (err, data)=> {        // appendFile is a Non-blocking operation (ya ak file ko create kar data ha )
        switch (myUrl.pathname) {
            case "/":
                res.write("this is a Home page");
                res.end();
                break;
                 case "/about":
                const username = myUrl.query.myname;
                res.write(`hi, ${username}`);
                res.end();
                break;
                case "/search":
                const search = myUrl.query.search-query;
                res.end(`here are ${search}`);
                break;
                 case "/contact":
                res.end("This is a contact page\n+9200000000")
                break;
            default:
                res.write("404 not found");
                res.end();
                break;
        }
    });
//  res.write("this ia a server");
//  res.end();

 })
const port = 5000;
myserver.listen(port,()=>{
console.log("hello server");    
});
