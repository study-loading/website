/*
 * @Description:
 * @Author: WangYong
 * @Date: 2019-11-14 23:56:46
 * @LastEditor: WangYong
 * @LastEditTime: 2020-05-10 02:52:36
 */
import React from 'react'
import DragonGirl from 'components/live2d/dragonGirl'
import Audio from 'components/audioPlayer'
import Video from 'components/videoPlayer'
import Routers from './router'

import 'styles/bootstrap-reboot.css'
import 'styles/common.css'

class App extends React.Component {
  render() {
    return (
      <div className="entry">
        <DragonGirl />
        <Audio />
        <Video />
        <Routers />
      </div>
    )
  }
}

export default App
