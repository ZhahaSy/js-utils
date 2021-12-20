import CryptoJS from 'crypto-js'

const { CBC, CFB, CTR, OFB, ECB } = CryptoJS.mode
const { AnsiX923, Iso10126, Iso97971, NoPadding, Pkcs7, ZeroPadding } = CryptoJS.pad

let modeMap = new Map([
  ['CBC', CBC],
  ['CFB', CFB],
  ['CTR', CTR],
  ['OFB', OFB],
  ['ECB', ECB]
])

let padMap = new Map([
  ['AnsiX923', AnsiX923],
  ['Iso10126', Iso10126],
  ['Iso97971', Iso97971],
  ['NoPadding', NoPadding],
  ['Pkcs7', Pkcs7],
  ['ZeroPadding', ZeroPadding]
])

export class AesCrypto {
  constructor(key, iv, mode, pad) {
    this.key = CryptoJS.enc.Utf8.parse(key)
    this.iv = CryptoJS.enc.Utf8.parse(iv)
    this.mode = modeMap.get(mode)
    this.padding = padMap.get(pad)
  }
  // 加密的方法
  encrypt(message) {
    let text = CryptoJS.AES.encrypt(message, this.key, {
      iv: this.iv,
      mode: this.mode,
      padding: this.padding
    }).toString()

    return text
  }
  // 解密的方法
  decrypt(ciphertext) {
    return CryptoJS.AES.decrypt(ciphertext, this.key, {
      iv: this.iv,
      mode: this.mode,
      padding: this.padding
    })
  }
}

// example

// let $AesCrypto = new AesCrypto('46cc793c53dc451b', '', 'ECB', 'Pkcs7')

// let ciphertext = $AesCrypto.encrypt('textValue') // 加密后的 秘文

// let message = $AesCrypto.encrypt(ciphertext) // 'textValue'
