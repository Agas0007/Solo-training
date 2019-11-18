'use sctrict';
let arr = {
    a: 1,
    b:2,
    c:3
};
//console.log(arr.c);
let b =  {
    a: 2,
    b:3,
    c:4
};

let ret = function(){
     if ( arr != b){
        console.log(arr);
    }else{
        console.log(b);
    }
};
 ret();
