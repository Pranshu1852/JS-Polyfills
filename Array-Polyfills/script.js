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

//Filter Polyfill
Array.prototype.myfilter=function (callbfunc) {
    let arr=[];
    for(let i=0;i<this.length;i++){
        if(callbfunc(this[i],i,this)){
            arr.push(this[i]);
        }
    }
    return arr;
}

