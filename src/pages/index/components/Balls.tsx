import React from 'react'
import { BallColor } from '../constants'
import Ball from './Ball'
import _ from 'lodash'

interface Props {
  count: number
}

export default class Balls extends React.Component {
  constructor(props: Props) {
    super()
    this.state = {
      numbers: _.map(new Array(this.props.count), (item, i) => {
        const num = i + 1 + ''
        if (num.length === 1) {
          return '0' + num
        }
        return num + ''
      })
    }
  }

  render() {
    return <div>
      { _.map(this.numbers, (item, i) => {
        return <Ball key={ i } color={ BallColor.red } size={ 25 } number={ item }></Ball>
      }) }
      <Ball color={ BallColor.blue } size={ 25 } number={ 2 }></Ball>
      <Ball color={ BallColor.transparent } size={ 25 } number={ 3 }></Ball>
    </div>
  }
}