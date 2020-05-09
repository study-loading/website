/*
 * @Description: 
 * @Author: WangYong
 * @Date: 2020-05-07 20:34:16
 * @LastEditor: WangYong
 * @LastEditTime: 2020-05-09 11:23:04
 */
let notification = {
  show(title: string, options: NotificationOptions) {
    return new Promise<Notification>((resolve, reject) => {
      if (!('Notification' in window)) {
        reject(new Error('不支持 Notification'))
      }
      if (Notification.permission !== 'granted') {
        this.requestPermission().then(() => {
          resolve(new Notification(title, options))
        })
      } else {
        resolve(new Notification(title, options))
      }
    })
  },
  requestPermission() {
    return new Promise((resolve, reject) => {
      Notification.requestPermission(permission => {
        if (permission === "granted") {
          resolve()
        }
        reject()
      })
    })
  }
}

function isSupportServiceWorker() {
  return 'serviceWorker' in window.navigator
}

function register() {
  window.navigator.serviceWorker.register('./sw.js').then(function (registration) {
    console.log(registration)
    console.log('Registered events at scope: ', registration.scope);
  }).catch(err => {
    console.log('注册失败')
  })
  window.navigator.serviceWorker.addEventListener('controllerchange', () => {
    notification.show('更新提示', {
      body: '页面内容发生改变，点击刷新',
      icon: 'https://sinonjs.org/assets/images/github.png'
    }).then((tip) => {
      tip.onerror = function (err) {
        console.log(err)
      }
      tip.onclick = function () {
        window.location.reload()
        tip.close()
      }
    }).catch(err => {
      window.location.reload()
    })
  })
}

function start() {
  if (isSupportServiceWorker()) {
    register()
  } else {
    console.log('不支持service worker')
  }
}

export default start
