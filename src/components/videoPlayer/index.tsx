import React from 'react'
// import classnames from 'classnames'
import './style.scss'

const playList = [
  './assets/video/magicgirl.mp4',
]

class Video extends React.Component {
  state = {
    played: 0
  }
  render() {
    return (
      <div className="videoPlayer">
        <video className="video-player" autoPlay loop muted src={playList[this.state.played]} />
      </div>
    )
  }
}

export default Video