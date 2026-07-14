const createCounter = function(init){
  let count = init;
  return{
    increment : function(){
        count = count + 1 ;
        return count;
    },
    decrement: function (){
        count = count - 1;
        return count;
        },
        reset: function (){
            count = init;
            return count;
        }
  };
    };
