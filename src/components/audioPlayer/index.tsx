/*
 * @Description: 
 * @Author: WangYong
 * @Date: 2020-05-10 00:29:11
 * @LastEditor: WangYong
 * @LastEditTime: 2020-05-10 15:56:18
 */
import React, { IframeHTMLAttributes } from 'react'
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
        <iframe className="audio-iframe" width="330" height="86" src="//music.163.com/outchain/player?type=2&id=285100&auto=1&height=66"></iframe>
        {/* <iframe className="audio-iframe" width="330" height="450" src="http://music.163.com/outchain/player?type=0&id=5011158409&auto=1&height=430"></iframe> */}
      </div>
    )
  }
}

export default Audio