var fs=require('fs');
var contents;
var http=require('https');




http.get('https://img.alicdn.com/imgextra/i4/298362896/TB20vGybodnpuFjSZPhXXbChpXa_!!298362896.jpg',function(res){
	res.on('data',function(dd){
		fs.writeFile('111.jpg',dd,function(err){

		})
	})

})