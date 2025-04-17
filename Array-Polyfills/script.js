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

//Shift Polyfill
Array.prototype.myshift=function (){
    if(this.length>0){
        let firstele=this[0];
        
        for(let i=0;i<this.length-1;i++){
            this[i]=this[i+1];
        }

        this.length-=1;

        return firstele;
    }
    else{
        console.log("Array doesn't have any elements.")
    }
}

//Find Polyfill
Array.prototype.myfind=function (val){
    let start=0;
    let end=this.length-1;

    while(start<=end){
        let mid=(start+end)/2;
        mid=Math.floor(mid);
        console.log(mid)

        if(this[mid]==val){
            return this[mid];
        }
        else if(this[mid]<val){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }

    return -1;
}

//Findind Polyfill
Array.prototype.myfindind=function (val){
    let start=0;
    let end=this.length-1;

    while(start<=end){
        let mid=(start+end)/2;
        mid=Math.floor(mid);
        console.log(mid)

        if(this[mid]==val){
            return mid;
        }
        else if(this[mid]<val){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }

    return -1;
}

Array.prototype.myevery=function (callback){
    for(let i=0;i<this.length;i++){
        if(this.hasOwnProperty(i)&&!callback.call(this,this[i],i,this)){
            return false;
        }
    }
    
    return true;
}

Array.prototype.myshift=function (){
    let result=[];

    for(let i=1;i<this.length;i++){
        result.push(this[i]);
    }

    return result;
}

Array.prototype.myvalueOf=function (){
    return this;
}

Array.prototype.forEach=function(cb){
    for(let i=0;i<this.length;i++){
        cb.call(this[i],i,this);
    }
}