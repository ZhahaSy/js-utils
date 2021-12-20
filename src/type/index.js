// js类型 ： String Number Boolean undefiend null Object Array Function promise
var typeOf = function (val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}

var isString = function (val) {
  return typeOf(val) === 'String';
}

var isNumber = function (val) {
  return typeOf(val) === 'Number';
}

var isBoolean = function (val) {
  return typeOf(val) === 'Boolean';
}

var isFunction = function (val) {
  return typeOf(val) === 'Function';
}

var isNull = function (val) {
  return typeOf(val) === 'Null';
}

var isUndefiend = function (val) {
  return typeOf(val) === 'Undefined';
}

var isObject = function (val) {
  return typeOf(val) === 'Object';
}

var isArray = function (val) {
  return typeOf(val) === 'Array';
}

var isPromise = function (val) {
    return typeOf(val) === 'Promise'
}

var isMap = function (val) {
  return typeOf(val) === 'Map';
}

var isSet = function (val) {
  return typeOf(val) === 'isSet';
}

var isSymbol = function (val) {
  return typeOf(val) === 'Symbol';
}

var isRegExp = function (val) {
    return typeOf(val) === 'RegExp'
}

var isDate = function (val) {
    return typeOf(val) === 'Date'
}

var isError = function (val) {
    return typeOf(val) === 'Error'
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
  isError, // Error - 数据类型校验
  typeOf // 获取数据类型值
}
