import React from 'react'

import './index.scss'

class Live2dDragon extends React.Component {
    componentDidMount() {
      loadlive2d("live2d", "./assets/live2d/dragonGirl/model/tia/model.json");
      // var message_Path = './live2d/'
      // var home_Path = 'https://haremu.com/'
    }
  render() {
    return (
      <div className="live2d-dragon">
        <canvas id="live2d" width="420" height="375" className="live2d"></canvas>
      </div>
    )
  }
}

export default Live2dDragon
