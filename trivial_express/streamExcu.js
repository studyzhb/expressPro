var stream=require('stream');
var util=require('util');

function ReadStream(path){
	stream.Readable.call(this);
	this._read(path);
}

ReadStream.prototype._read=function(path){
	this.push(path);
}

util.inherits(ReadStream,stream.Readable);

function WriteStream(path){
	stream.Writable.call(this);
	this._cached=new Buffer('');

}



util.inherits(WriteStream,stream.Writable);

function TransformStream(){
	stream.Transform.call(this);
}
util.inherits(TransformStream,stream.Transform);


var rs=new ReadStream('https://img.alicdn.com/imgextra/i4/298362896/TB20vGybodnpuFjSZPhXXbChpXa_!!298362896.jpg');

var ws=new WriteStream('./image/')

rs.pipe();

