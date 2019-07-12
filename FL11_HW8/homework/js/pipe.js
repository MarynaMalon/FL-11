function addOne(x) {
        return x + 1;
}
function pipe(y) {
    let result = y;
    
    for (var i = 1; i < arguments.length; i++) {
      let func = arguments[i];
      result = func(result);
    }
    return result;
}
pipe(2, addOne, addOne, addOne);