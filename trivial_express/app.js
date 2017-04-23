var express=require('express');
var app=express();
var fs=require('fs');
var contents;



app.get('*',function(req,res,next){
	var rs=fs.createReadStream('https://img.alicdn.com/imgextra/i4/298362896/TB20vGybodnpuFjSZPhXXbChpXa_!!298362896.jpg');

rs.on('readable',function(){
	var str;
	var d=rs.read();
	if(d){
		if(typeof d =='string'){
			str=d;
		}else if (typeof d=='object' && d instanceof Buffer){
			str=d.toString('utf8');
		}
		if(str){
			if(!contents){
				contents=d;
			}else{
				contents+=str;

			}
		}

	}
})

rs.on('end',function(){
	console.log("read in the file contents")
	console.log(contents.toString('utf8'))
})


})



app.listen(8080)