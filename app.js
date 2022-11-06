const fs = require('fs')
const http = require('http')
const https = require('node:https')
const path = require('path')
const os = require('os')
const url = require('url')
const express = require('express')

// fs.readFile('demo.txt','utf8',(err,data)=>{
//     console.log(data)
//     http.createServer((req,res) => {
//         res.end(data)
//     }).listen(9000)
// })
// http.createServer((req,res) => {
//     fs.readFile('demo.txt','utf8',(err,data)=>{
//         res.end(data)
//     })
// }).listen(9000)
 


// http.createServer((req,res) => {
//     res.write("hello world!")
//     res.end()
// }).listen(9000)

// console.log(path.parse(__filename).dir);

// const math = require('./math')
// const {addition,} = subtractrequire('./math')

// console.log(addition(5,3));

// console.log(module.paths[3]);

user = os.userInfo()
// console.log(user);
// console.log(os.uptime());
// console.log(os.totalmem()+"\n"+os.freemem());
// console.log(os.type()+"\n"+os.release());

// console.log(path.sep);

//const fp = path.join('/content/','sub','demo.js')
// console.log(fp)
// console.log(path.basename(fp));
// console.log(__dirname);
// console.log(__filename);
// abs = path.resolve(__dirname,fp)
// console.log(abs);


// f = fs.readFileSync('./content/test.txt','utf-8')
// s = fs.readFileSync('./content/sub/demo.txt','utf-8')
// console.log(f,"\n",s);

//its not worked

// filename = document.getElementById('file')
// createfile = () =>
// {
//     fs.writeFileSync(`./content/sub/${filename.value}`,
//     `result 👇\n${f}\n${s}`)
// }

// http.createServer((req,response)=>{
//     const path = req.url
//     switch (path) {  
//         case '/':
//             filepath = path1.join(__dirname,'Santosh.png')
//             fs.readFile(filepath, function(error, data) {  
//                 if (error) {  
//                     response.writeHead(404);  
//                     response.write(error);  
//                     response.end();  
//                 } else {  
//                     response.writeHead(200, {  
//                         'Content-Type': 'image/png'  
//                     });  
//                     response.write(data);  
//                     response.end();  
//                 }
//             });  
//             break;  
//         case '/demo1.txt':  
//             fs.readFile(__dirname + path, function(error, data) {  
//                 if (error) {  
//                     response.writeHead(404);  
//                     response.write(error);  
//                     response.end();  
//                 } else {  
//                     response.writeHead(200, {  
//                         'Content-Type': 'text'  
//                     });  
//                     response.write(data);  
//                     response.end();  
//                 }  
//             });  
//             break;  
//         case '/demo2.txt':  
//             fs.readFile(__dirname + path, function(error, data) {  
//                 if (error) {  
//                     response.writeHead(404);  
//                     response.write(error);  
//                     response.end();  
//                 } else {  
//                     response.writeHead(200, {  
//                         'Content-Type': 'text'  
//                 });  
//                     response.write(data);  
//                     response.end();  
//                 }  
//             });  
//             break;  
//         default:  
//             response.writeHead(404);  
//             response.write("oops this doesn't exist - 404");  
//             response.end();  
//             break;  
//     }
// }).listen(9000)

// console.log(fs.readFileSync(path.join(__dirname,'cert','key.pem'),'utf8'));

const app = express()
app.use('/', (req,res,next) => {
    res.send("hello from the secure site")
})

const sslserver = https.createServer({
    key : fs.readFileSync(path.join(__dirname,'cert','key.pem')),
    cert : fs.readFileSync(path.join(__dirname,'cert','cert.pem'))
},app)

sslserver.listen(9000,() => {
    console.log("secure server on 🔐 port 9000");
})

