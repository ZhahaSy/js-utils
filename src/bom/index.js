import $ from 'jquery'
import {typeOf} from'../type/index.js'
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

const localStore = function (key, value) {
  if (value === void(0)) {
    let lsValue = localStorage.getItem(key)

    if (lsValue && lsValue.indexOf('autostringfy-') === 0) {
      return JSON.parse(lsValue.split('autostringfy-')[1])
    }

    return lsValue

  } else {
    if (typeOf(value) === 'Object' || typeOf(value) === 'Array') {
      value = 'autostringfy-' + JSON.stringify(value)
    }
    return localStorage.setItem(key, value)
  }
}

const session = function (key, value) {
  if (value === void(0)) {
    let lsValue = sessionStorage.getItem(key)

    if (lsValue && lsValue.indexOf('autostringfy-') === 0) {
      return JSON.parse(lsValue.split('autostringfy-')[1])
    }

    return lsValue

  } else {
    if (typeOf(value) === 'Object' || typeOf(value) === 'Array') {
      value = 'autostringfy-' + JSON.stringify(value)
    }
    return sessionStorage.setItem(key, value)
  }
}

export {
  getQueryString, // 获取页面 url参数
  appendQuery, // url增加参数
  localStore, // localStorage 封装
  session // sessionStorage 封装
}