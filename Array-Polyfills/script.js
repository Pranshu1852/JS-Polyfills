// Map Polyfill
Array.prototype.mymap=function (callbfunc) {
    let arr=[];
    for(let i=0;i<this.length;i++){
        console.log(this);
        let value=callbfunc(this[i],i,this);
        arr.push(value);
    }

    return arr;
}