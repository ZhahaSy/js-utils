// js类型 ： String Number Boolean undefiend null Object Array Function promise
var isString = function (val) {
  return Object.prototype.toString.call(val).slice(8,-1) === 'String';
}

var isNumber = function (val) {
  return Object.prototype.toString.call(val).slice(8,-1) === 'Number';
}

var isBoolean = function (val) {
  return Object.prototype.toString.call(val).slice(8,-1) === 'Boolean';
}

var isFunction = function (val) {
  return Object.prototype.toString.call(val).slice(8,-1) === 'Function';
}

var isNull = function (val) {
  return Object.prototype.toString.call(val).slice(8,-1) === 'Null';
}

var isUndefiend = function (val) {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Undefined';
}

var isObject = function (val) {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Object';
}

var isArray = function (val) {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Array';
}

var isPromise = function (val) {
    return Object.prototype.toString.call(val).slice(8, -1) === 'Promise'
}

var isMap = function (val) {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Map';
}

var isSet = function (val) {
  return Object.prototype.toString.call(val).slice(8, -1) === 'isSet';
}

var isSymbol = function (val) {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Symbol';
}

var isRegExp = function (val) {
    return Object.prototype.toString.call(val).slice(8, -1) === 'RegExp'
}

var isDate = function (val) {
    return Object.prototype.toString.call(val).slice(8, -1) === 'Date'
}

var isError = function (val) {
    return Object.prototype.toString.call(val).slice(8, -1) === 'Error'
}

export default {
  isString, // String - 数据类型校验
  isNumber, // Number - 数据类型校验
  isBoolean, // Boolean - 数据类型校验
  isFunction, // Function - 数据类型校验
  isNull, // Null - 数据类型校验
  isUndefiend, // Undefiend - 数据类型校验
  isObject, // Object - 数据类型校验
  isArray, // Array - 数据类型校验
  isPromise, // Promise - 数据类型校验
  isMap, // Map - 数据类型校验
  isSet, // Set - 数据类型校验
  isSymbol, // Symbol - 数据类型校验
  isRegExp, // RegExp - 数据类型校验
  isDate, // Date - 数据类型校验
  isError // Error - 数据类型校验
}
