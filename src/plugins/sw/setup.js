/*
 * @Description: 
 * @Author: WangYong
 * @Date: 2020-05-07 20:41:33
 * @LastEditor: WangYong
 * @LastEditTime: 2020-05-07 23:12:39
 */


let logs = {
  log(msg) {
    console.log('Service Worker: ' + msg)
  },
}

let assets = {

}



function cacheAssetsFile(e) {
  // let cacheOpenPromise = caches.open(cacheName).then(function (cache) {
  //   return cache.addAll(cacheFiles); 
  // });
  // e.waitUntil(cacheOpenPromise);
}

function cacheStaticFile(req, res) {
  // console.log(res)
  caches.open('static').then(function (cache) {
      return cache.put(req, res);
  })
}

function cacheApiData(req, res) {

}

function fetchData(req) {
  return fetch(req)
}

function cacheData(req, res) {
  if (res.type === 'basic') {
    cacheStaticFile(req, res)
  } else {
    cacheApiData(req, res)
  }
}

function bindEvent() {
  self.addEventListener('install', function (e) {
    self.skipWaiting()
    logs.log('install');
    cacheAssetsFile(e)
  })
  self.addEventListener('fetch', function (e) {
    // 如果有cache则直接返回，否则通过fetch请求
    e.respondWith(
      caches.match(e.request).then(function (cache) {
        if (cache) {
          return cache
        } else {
          return fetchData(e.request.clone()).then((res) => {
            cacheData(e.request.clone(), res.clone())
            return res
          })
        }
      }).catch(function (err) {
          console.log(err);
          // return fetch(e.request);
      })
    );
  });
  self.addEventListener('activate', function (e) {
    logs.log('activate');
    cachePromise = caches.keys().then(function (keys) {
        return Promise.all(keys.map(function (key) {
          caches.delete(key)
        }))
    })
    e.waitUntil(cachePromise)
  });
}

function setup() {
  bindEvent()
}

let version = '1.0.2'

setup()
