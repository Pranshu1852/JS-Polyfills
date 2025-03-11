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

//Join Pollyfill
Array.prototype.myjoin=function (separater=","){
    let result="";
    for(let i=0;i<this.length;i++){
        i===this.length-1 ? result+=this[i] : result+=this[i]+separater;
    }
    return result;
}

//Pop Pollyfill
Array.prototype.mypop=function (){
    if(this.length>0){
        let lastele=this[this.length-1];
        this.length-=1;
        return lastele;
    }
    else{
        console.log("Array doesn't have any elements.")
    }
}