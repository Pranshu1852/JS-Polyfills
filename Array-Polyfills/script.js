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

//Reduce Polyfill
Array.prototype.myreduce=function (callbfunc,initvalue=0){
    let accumulator=initvalue;

    for(let i=0;i<this.length;i++){
        accumulator=callbfunc(accumulator,this[i]);
    }
    return accumulator;
}

//Slice Polyfill
Array.prototype.myslice=function (start,end){
    let arr=[];
    for(let i=start;i<end;i++){
        arr.push(this[i]);
    }
    return arr;
}