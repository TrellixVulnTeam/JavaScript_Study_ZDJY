const obj = {a: 0, b: 1, c: 2};

function replacer(value){
    if(value < 1){
        return;
    }
    return value;
}

const json = JSON.stringify(obj);
console.log(json);

const obj2 = JSON.parse(json);
console.log(obj2);