// const add = x => y => x+y;
// console.log(add(2)(3));
(function(x){
    return (function(y){
        console.log(x);
    })(2)
})(1);