// console.log("hello world");
// console.log("hello");



import  http from "http";


const myserver =http.createServer((req , res)=>{

    switch (req.url) {
        case "/":
            res.write("this is a home page")
            res.end()
            break;
            case "About":
            res.write("this is a about page")
            res.end()
            break; 
            case "Contact":
             res.write("this is a contact page")
            res.end()
            break;   
    
        default:
            res.write("")
            res.end()
            break;
    }
//  res.write("this ia a server");
//  res.end();

 })
const port = 3000;
myserver.listen(port,()=>{
console.log("hello server");    
})