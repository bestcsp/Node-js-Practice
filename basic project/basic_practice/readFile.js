let fs=require('fs')
fs.readFile('calc.js','utf8',function(err,data){
    console.log(data)
})

fs.writeFile('writeFile.txt','So I am writing this file through js write file command ',function(err){
    console.log("File Written")
})
console.log("Out of the function")
fs.appendFile('writeFile.txt',"So appending this data to written file",function(err){
    if (err){
        console.error(err)
    }
    console.log("Data appended on that data")
})

console.log("Going to delete an existing file");
fs.unlink('writeFile.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});