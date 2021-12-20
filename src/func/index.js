// 函数防抖
export const debounce = function debounce(func, wait) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout)
    timeout = setTimeout(function(){
      func.apply(context, args)
    }, wait);
  }
}

// 函数节流
function throttle(func, wait) {
    var context, args;
    var previous = 0;

    return function() {
        var now = +new Date();
        context = this;
        args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}

export {
  debounce, // 函数防抖
  throttle // 函数节流
}