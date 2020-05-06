/*
 * @Description:
 * @Author: WangYong
 * @Date: 2019-11-14 23:56:46
 * @LastEditor: WangYong
 * @LastEditTime: 2019-11-17 21:40:45
 */
import React from 'react'
import Routers from './router'

import 'styles/bootstrap-reboot.css'
import 'styles/common.css'

class App extends React.Component {
  render() {
    return (
      <div className="entry">
         <Routers />
      </div>
    )
  }
}

export default App
