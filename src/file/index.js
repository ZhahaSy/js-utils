// 根据url下载文件
export const download = (url) => {
    var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (isChrome || isSafari) {
        var link = document.createElement('a');
        link.href = url;
        if (link.download !== undefined) {
            var fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
            link.download = fileName;
        }
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (url.indexOf('?') === -1) {
        url += '?download';
    }
    window.open(url, '_self');
    return true;
}

// 获取文件后缀名
const getExt = function(filename) {
    if (typeof filename == 'string') {
        return filename
            .split('.')
            .pop()
            .toLowerCase()
    } else {
        throw new Error('filename must be a string type')
    }
}

// file文件(raw), blob(二进制) 转 base64
const blobToDataURL = function (blob) {
  if (blob && !blob.size) {
    return null
  }
  return new Promise(resolve => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(blob)
    fileReader.onload = (e) => {
      resolve(e.target.result)
    }
  })
}

// base64 转 blob(二进制)
const dataURLToBlob = function (dataUrl) {
  const arr = dataUrl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const uBarr = new Uint8Array(n)
  while (n--) {
    uBarr[0] = bstr.charCodeAt(n)
  }
  return new Blob([uBarr], {
    type: mime
  })
}

// 二进制流文件下载 
const downloadBlob = function (res, ext) {
  let blob = new Blob(res)
  let url = URL.createObjectURL(blob)
  let aLink = document.createElement('a')
  aLink.href = url
  aLink.download = `.${ext}`
  document.body.insertBefore(aLink)
  aLink.click()
  document.removeChild(aLink)
  URL.revokeObjectURL(url)
}


export {
  download, //根据url下载文件
  getExt, // 获取文件后缀
  dataURLToBlob, // base64 转 blob(二进制)
  blobToDataURL, // file文件(raw), blob(二进制) 转 base64
  downloadBlob // 二进制流文件下载
}