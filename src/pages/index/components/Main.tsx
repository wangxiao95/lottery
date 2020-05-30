import React from 'react'
import Balls from './Balls'
import _ from 'lodash'
import { BallColor } from '../constants'
import Ball from './Ball'

export default class Main extends React.Component {
  constructor() {
    super()
  }

  render() {
    return <div className="red-balls__box">
      <Balls count={ 33 } color={ BallColor.red }></Balls>
      <Balls count={ 16 }></Balls>
    </div>
  }
}