const once = function (fn){
    let called = false ;
   
    return (...args)=> {
        if (called) return undefined;
        called = true;
        return fn (...args);

    };
};