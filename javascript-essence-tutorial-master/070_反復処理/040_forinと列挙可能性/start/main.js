const s = Symbol();

const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	[s]:value4
}

// Object.prototype.method = function(){}
// Object.defineProperty(Object.prototype,'method',{
// 	enumerable:false
// });

// for...in  順番はランダム

for(let key in obj){
	if(obj.hasOwnProperty(key)){

	};
	console.log(key,obj[key]);
}