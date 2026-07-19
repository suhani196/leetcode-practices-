function cancellable (fn,args,t){
    fn(...args);
const time = setInterval (()=>{
    fn(...args);
},t);
return function cancelFn(){
    clearInterval(time);
};
}