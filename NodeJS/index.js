const { error } = require('console');
const fs = require('fs');


//?File create ........

// fs.writeFile('example.txt','I am mehedi hasan',(err)=>{

//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File create successfully.");
//     }
// })

//?File read ........
// fs.readFile('example.txt','utf-8',(err,data)=>{

//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }

// })

//?File rename ........
// fs.rename('example.txt','e.txt',(err)=>{

//     if(err) throw err;
//     console.log('Successfully Create');

// })

//?File append ........

// fs.appendFile('e.txt','. I am android developer.',(err)=>{
//     if(err) throw err;
//     console.log('Append successfully');
// })

//?File Delete ........

// fs.unlink('e.txt',(err)=>{
//     if(err) throw err;
//     console.log('Delete successfully.');
// })


//?File exists
fs.exists('example.txt',(error)=>{
    console.log(error?'File exists':'File no exists');
    
})



