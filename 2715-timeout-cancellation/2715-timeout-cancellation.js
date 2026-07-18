function cancellable (fn,args, t){
    const alerm = setTimeout(()=>{
        fn(...args);
    },t);

    return function cancelFn(){
        clearTimeout(alerm);
    };
}