import $ from 'jquery'
// 获取页面 url参数
const getQueryString = function (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const search = window.location.search.split('?')[1] || '';
  const r = search.match(reg) || [];
  return r[2];
}

// url增加参数
const appendQuery = function (url, key, value) {
  var options = key;
  if (typeof options == 'string') {
    options = {};
    options[key] = value;
  }
  options = $.param(options);
  if (url.includes('?')) {
    url += '&' + options
  } else {
    url += '?' + options
  }
  return url;
}


export {
  getQueryString, // 获取页面 url参数
  appendQuery // url增加参数
}