const compose = function (fn) {
    return function (x) {
        let result =x;
        for (let i = fn.length - 1; i >= 0 ; i -- ) {
           result = fn[i](result);
        }
        return result;
    };
};