// 函数节流
export const debouncer = (fn, time, interval = 200) => {
  if (time - (window.debounceTimestamp || 0) > interval) {
    fn && fn();
    window.debounceTimestamp = time;
  }
}