/*
 * @Description:
 * @Author: WangYong
 * @Date: 2019-09-23 22:47:07
 * @LastEditor: WangYong
 * @LastEditTime: 2020-05-07 22:40:41
 */
import React from 'react'
import { render } from 'react-dom'
import App from './pages/app'
import serviceWorkerRegister from 'plugins/sw/register'

render(<App />, document.querySelector('#app'))

window.addEventListener('load', () => {
  serviceWorkerRegister()
})
