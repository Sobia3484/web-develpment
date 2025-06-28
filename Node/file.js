import { log } from 'console';
import fs from 'fs';
//sync
// fs.writeFileSync("./test.txt","I am a student of  a weeb development");

//async
// fs.writeFile("./test.txt","I am a student of  a web development" , (err)=>{});

                        // ------read file----- 
//sync                     
// const result = fs.readFileSync("./test.txt","utf-8");
// console.log(result);

//async
// fs.readFile("./test.txt","utf-8" , (err, result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//     console.log(result);
//     }
// });

                //    ------append------ 
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString()); 
            
// fs.appendFileSync("./test.txt",`\t hello world \n ${Date.now()}`);

                    // ----copy------ 
// fs.copyFileSync("./test.txt","./copy.txt");         

                    //    ------delete------
// fs.unlinkSync("./copy.txt");   

// console.log(fs.statSync("./test.txt")); //fs contain many other functions
