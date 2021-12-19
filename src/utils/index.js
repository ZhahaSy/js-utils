// 生成随机数
const uuid = function (length, chars) {
    chars =
        chars ||
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    length = length || 8
    var result = ''
    for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]
    return result
}

// 休眠 阻塞程序执行
const sleep = export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  //使用方式
  // const fetchData=async()=>{
  //   await sleep(1000)
  // }
}

// 深拷贝
const deepCopy = function (obj) {
    if (typeof obj != 'object') {
        return obj
    }
    if (obj == null) {
        return obj
    }
    return JSON.parse(JSON.stringify(obj))
}

// 对象转FormData
const getFormData = function (object) {
    const formData = new FormData()
    Object.keys(object).forEach(key => {
        const value = object[key]
        if (Array.isArray(value)) {
            value.forEach((subValue, i) =>
                formData.append(key + `[${i}]`, subValue)
            )
        } else {
            formData.append(key, object[key])
        }
    })
    return formData
}

export {
  uuid, // 生成随机数
  sleep, // 休眠 阻塞程序执行
  deepCopy, // 深拷贝
  getFormData // 对象转FormData
}