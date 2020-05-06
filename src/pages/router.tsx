/*
 * @Description:
 * @Author: WangYong
 * @Date: 2019-11-06 20:54:27
 * @LastEditor: WangYong
 * @LastEditTime: 2020-02-27 18:07:27
 */
import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const LoadingComponent = () => <h1>Loading</h1>

let routerConfig = []

class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {routerConfig.map((route, i) => (
            <Route
              key={i}
              exact={!!route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    )
  }
}

export default Routers
