//--------------------//
//    Solution (1)    //
//--------------------//
let multiplyValue =(x:number, y?:number)=>{
    if(y==0){
        return 0;
    }

    if(x && y){
        return x*y;
    }

    if(x){
        return x*2;
    }
}

// console.log(multiplyValue(10));
// console.log(multiplyValue(10,5));
// console.log(multiplyValue(7,0));