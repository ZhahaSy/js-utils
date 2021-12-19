// 去除html标签
const removeHtml = function (str) {
    return str.replace(/<[^>]+>/g, '')
}

const hasClass = function (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

const addClass = function (el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

const removeClass = function (el, className) {
  if (hasClass(el, className)) {
    return
  }

  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  el.className = el.className.replace(reg, ' ')
}

const getScrollPosition = function (el) {
  if (!el) {
    el = window
  }

  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollX,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollY
  }
}

const scrollToTop = function (el) {
  let elTop
  let elLeft
  if (!(el && el.scrollTop)) {
    elTop = document.documentElement.scrollTop || document.body.scrollTop
    el = window
    elLeft = document.documentElement.scrollLeft || document.body.scrollLeft
  } else {
    elTop = el.scrollTop
    elLeft = el.scrollLeft
  }

  if (elTop > 0) {
    window.requestAnimationFrame(scrollToTop)
    el.scrollTo(elLeft, elTop - el / 8)
  }
}

const elementIsIsVisibleInviewPort = function (el, partiallyVisible = false) {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

// 动态引入js
const injectScript = function (src) {
  const s = document.createElement('script');
  s.type = 'text/JavaScript';
  s.async = true;
  s.src = src;
  const t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
}

// 16禁止转RGB
export const colorToRGB = (val, opa) => {

  var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
  var isOpa = typeof opa == 'number'; //判断是否有设置不透明度

  if (!pattern.test(val)) { //如果值不符合规则返回空字符
    return '';
  }

  var v = val.replace(/#/, ''); //如果有#号先去除#号
  var rgbArr = [];
  var rgbStr = '';

  for (var i = 0; i < 3; i++) {
    var item = v.substring(i * 2, i * 2 + 2);
    var num = parseInt(item, 16);
    rgbArr.push(num);
  }

  rgbStr = rgbArr.join();
  rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
  return rgbStr;
}

export {
  removeHtml, // 删除HTML标签
  hasClass, // 判断元素是否存在某个class
  addClass, // 添加Class
  removeClass, // 删除Class
  getScrollPosition, // 获取元素滚动位置
  scrollToTop, // 滚动到顶部
  elementIsIsVisibleInviewPort, // 元素是否在视口
  injectScript, // 引入js
  colorToRGB // 16进制颜色转RGB
}

