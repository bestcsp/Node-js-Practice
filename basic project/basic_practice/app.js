let a=5;
let b=6;
let c=a+b;



console.log("Hello World")
console.log("Sum of two number is ",c)
var http=require('http') //http used for sending http request,that's inbuilt package
http.createServer(function(req,res){   //method to send as http response (req is request,res is response)
    res.writeHead(200,{"Content-type":'text/html'})
    res.write("Welcome World")
    res.end()
}).listen(8000) // to decide on which port it gonna respond