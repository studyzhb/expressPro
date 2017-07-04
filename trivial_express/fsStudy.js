var fs=require('fs');

fs.readFile('test.txt','utf8',(err,data)=>{
	if(err) throw err;
	console.log(data)
	console.log(typeof data)
	console.log(JSON.parse(data))
})


// fs.writeFile('test.txt',JSON.stringify({validate_time:'121313',data:1564165416541654165}),'utf-8',function(err,a){
// 	if(err) throw error;
// 	console.log(a);
// })