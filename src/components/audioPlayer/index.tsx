/*
 * @Description: 
 * @Author: WangYong
 * @Date: 2020-05-10 00:29:11
 * @LastEditor: WangYong
 * @LastEditTime: 2020-05-10 02:06:41
 */
import React from 'react'
import classnames from 'classnames'
import './style.scss'

class Audio extends React.Component {
  state = {
    visible: false,
  }
  handleShowAudio = () => {
    this.setState({
      visible: true
    })
  }
  handleHideAudio = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div className={classnames("audioPlayer", {
        show: this.state.visible,
        hide: !this.state.visible
      })} onMouseEnter={this.handleShowAudio} onMouseLeave={this.handleHideAudio}>
        <iframe className="audio-iframe" width="298" height="52" src="//music.163.com/outchain/player?type=0&id=3212113629&auto=1&height=32"></iframe>
      </div>
    )
  }
}

export default Audio