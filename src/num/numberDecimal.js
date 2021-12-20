// 大数字计算
import Big from 'big.js'
import {typeOf} from'../type/index.js'

export function validateCompare(real, max='0', min='0') {
  if (real && typeOf(real) === 'String') {
    // maxValue 在范围之外的值是 -1（比最大值大）
    let maxValue = new Big(max).cmp(new Big(real))
    // minValue 在范围之外的值是 -1（比最小值小）
    let minValue = new Big(real).cmp(new Big(min))

    return {
      max: maxValue,
      min: minValue
    }
  } else {
    throw new Error('the arguments[0] is not supported')
  }
}