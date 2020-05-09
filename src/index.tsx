/*
 * @Description:
 * @Author: WangYong
 * @Date: 2019-09-23 22:47:07
 * @LastEditor: WangYong
 * @LastEditTime: 2020-05-09 18:35:51
 */
import React from 'react'
import { render } from 'react-dom'
import App from './pages/app'
import OfflinePluginRuntime from 'offline-plugin/runtime';
// import serviceWorkerRegister from 'plugins/sw/register'

render(<App />, document.querySelector('#app'))

OfflinePluginRuntime.install()
// window.addEventListener('load', () => {
//   serviceWorkerRegister()
// })

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.getRegistration().then((registration) => {
//     registration && registration.unregister().then((boolean) => {
//       boolean ? alert('注销成功') : alert('注销失败')
//     });
//   })
// }
