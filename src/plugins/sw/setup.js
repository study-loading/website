/*
 * @Description: 
 * @Author: wangYong
 * @Date: 2020-05-06 13:35:43
 * @LastEditors: wangYong
 * @LastEditTime: 2020-05-06 18:39:56
 */

// config
// download
// version = 1.0.8
// 以模块资源为分割
// 多个sw，分别管理不同域下的资源

const config = {
  host: {
    preload: [],
    exclude: [],
  }
}

const staticMIMEType = [
  'text/',
  'image/',
  'application/javascript',
  'application/json',
  'font/'
]

const cacheManager = {
  remove(name, fn) {
    if (fn) {
      caches.open(name).then(function (cache) {
        return cache.keys().then(key => {
          if (fn(key)) {
            cache.delete(key).then(() => {
              console.log(key + ' is remove')
            }).catch(err => {
              console.log(key + ' remove failed')
            })
          }
        })
      })
    } else {
      caches.delete(name).then(() => {
        console.log(name + ' is remove')
      }).catch(err => {
        console.log(name + ' remove failed')
      })
    }
  },
  removeAll() {
    caches.keys().then(keys => {
      keys.forEach((key) => {
        this.remove(key)
      })
    })
  },
  add(name, req, res) {
    caches.open(name).then(cache => {
      cache.put(req, res).then(() => {
        console.log('added '+ name + ' cache')
      }).catch(err => {
        console.log('add '+ name + ' cache failed')
      })
    })
  },
  update() {

  },
  preload(cacheName, cacheList) {
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(cacheList)
    })
  }
}

// 预先请求的资源在失败时会导致register失败
function prefectchAssets() {
  for (let name in config) {
    cacheManager.preload(name, config[name])
  }
  return cache.addAll([])
}

function install() {
  self.addEventListener('install', function (event) {
    // 直接接管上一个sw
    self.skipWaiting()
    // event.waitUntil(prefectchAssets())
  })
}

function activate() {
  self.addEventListener('activate', function (event) {
    console.log('service worker is active')
    // 先暴力清除所有缓存
    cacheManager.removeAll()
  })
}

function proxyFetch() {
  self.addEventListener('fetch', function (e) {
    e.respondWith(
      caches.match(e.request).then((cache) => {
        if (!cache) {
          return fetch(e.request.clone()).then(res => {
            handleRequestCache(e.request.clone(), res.clone())
            return res
          })
        }
        return cache
      }).catch(function (err) {
        console.debug(err)
        return Promise.reject()
      })
    )
  })
}

function handleRequestCache(req, res) {
  if (canCacheFile(req, res)) {
    if (isLocalSource(req)) {
      cacheManager.add('host', req, res)
    }
  }
}

function canCacheFile(req, res) {
  if (!res || (res.status !== 200 && res.status !== 304) || res.type !== 'basic') {
    console.log(res)
    return false
  }
  if (isStaticFile(req, res)) {
    return true
  }
  return false
}

function isStaticFile(req, res) {
  let contentType = res.headers.get('content-type')
  for (let mime of staticMIMEType) {
    if (contentType.indexOf(mime) !== -1) {
      return true
    }
  }
  return false
}

function isLocalSource(req) {
  let url = new URL(req.url)
  return url.host === location.host
}

function setup() {
  install()
  activate()
  proxyFetch()
}

setup()

// caches.open(htmlCacheName).then(cache => {
//   cache.delete()
// })
// sw应该只缓存静态资源，对于动态资源不要缓存，应该sw无法判断缓存的资源什么时候会更新，无法判断缓存是否可用的包括远程资源、
// 对于文件名未发生改变的资源，sw只能清除所有缓存再重新请求，比如未带hash资源和远程资源
// 对于webpack带hash的资源，更新后能够缓存最新的资源，但是不能清除旧的资源，因为无法判断旧的资源是否还被使用
// 是否应该缓存接口，如果缓存如何执行

// 综上： reload做法是一种虽然暴力清除缓存，浪费未修改的文件的流量，但是却是目前最好的实时更新方法，后续只能等待sw推出新的解决方案

// eg. fetch监听到一张图片，该不该缓存，如果是本地图片那就缓存，应该伴随着sw的更新，如果是远程图片, 不应该缓存，而是让远程服务器指定资源的缓存时间
// 但是一旦缓存时间到限制了，就会导致ui残缺，或者说远程服务器禁止浏览器缓存也是一样的

// 补充： sw只能缓存当前路径下的资源
