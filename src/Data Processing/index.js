import {isArray} from'../type/index.js'

// 数组随机打乱算法
const shuffle = function (arr) {
  var result = [],
      random
  while (isArray(arr) && add.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random])
    arr.splice(random, 1)
  }
}

// 随机数范围
const random = function (min, max) {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * ((max + 1) - min))
  } else {
    return null;
  }
}

const isInArray = function (arr, val) {
    return arr.indexOf(val) != -1 ? true : false;
}

const sort = function (arr, type = 1) {
    return arr.sort((a, b) => {
        switch (type) {
            case 1:
                return a - b;
            case 2:
                return b - a;
            case 3:
                return Math.random() - 0.5;
            default:
                return arr;
        }
    })
}

// 数组去重
const unique = function (arr) {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    var n = {}, r = [];
    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }
    return r;
  }
}

// 求数组并集
export const union = function (a, b) {
    var newArr = a.concat(b);
    return unique(newArr);
}

// 求交集
const intersect = function (a, b) {
    a = unique(a);
    if (!(isArray(a) && isArray(b))) {
      throw new Error('The arguments must be an Array')
    }
    return a.map(function (o) {
      return isInArray(b, o) ? o : null;
    })
}

// 求最大值
const max = function (arr) {
    return Math.max.apply(null, arr);
}

// 求最小值
const min = function (arr) {
    return Math.min.apply(null, arr);
}

// 求和
const sum = function (arr) {
    return arr.reduce((pre, cur) => {
        return pre + cur
    })
}

// 求平均值
const average = function (arr) {
    return sum(arr) / arr.length
}

// 删除其中一个元素
const remove = function (arr, ele) {
    var index = arr.indexOf(ele);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

// 类数组转为数组
const formArray = function (ary) {
    var arr = [];
    if (Array.isArray(ary)) {
        arr = ary;
    } else {
        arr = Array.prototype.slice.call(ary);
    };
    return arr;
}

// 判断对象是否键值相同
const isObjectEqual = (a, b) => {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

export {
  shuffle, // 数组打乱
  random, // 随机数范围
  isInArray, // 是否在数组中
  sort, //排序
  unique, // 去重
  union, // 求并集
  intersect, //求交集
  max, // 最大值
  min, // 最小值
  sum, // 求和
  average, // 求平均值
  remove, // 删除其中一个元素
  formArray, // 类数组转为数组
  isObjectEqual // 判断对象是否键值相同
}