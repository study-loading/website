/*
 * @Description: 
 * @Author: WangYong
 * @Date: 2020-05-07 20:34:16
 * @LastEditor: WangYong
 * @LastEditTime: 2020-05-07 23:10:05
 */
function isSupportServiceWorker() {
  return 'serviceWorker' in window.navigator
}

function register() {
  window.navigator.serviceWorker.register('./sw.js').then(() => {
    console.log('Service Worker 注册成功');
  })
  window.navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload()
  })
}

function setup() {
  if (isSupportServiceWorker()) {
    register()
  } else {
    console.log('Service Worker不支持， 注册失败')
  }
}

export default setup
