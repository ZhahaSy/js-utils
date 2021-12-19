// 去除空格
// type: 1-所有空格 2-前后空格 3-前空格 4-后空格
const trim = function (str, type) {
  type = type || 1
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
    }
}

// 字符大小写转换
// type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
const changeCase = function (str, type) {
  type = type || 4
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
      });
    case 3:
      return str.split('').map(function (word) {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase();
        } else {
          return word.toLowerCase()
        }
      }).join('')
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
}

// 检测密码强度
const checkPwd = function (str) {
  var Lv = 0;
  if (str.length < 6) {
    return Lv
  }
  if (/[0-9]/.test(str)) {
    Lv++
  }
  if (/[a-z]/.test(str)) {
    Lv++
  }
  if (/[A-Z]/.test(str)) {
    Lv++
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++
  }
  return Lv;
}

// 在字符中插入新字符
const insertStr = (soure, index, newStr) => {
  var str = soure.slice(0, index) + newStr + soure.slice(index);
  return str;
}

export {
  trim, // 去除空格、
  changeCase, // 英文大小写转换
  checkPwd, // 检测密码强度
  insertStr // 字符拆入新字符
}