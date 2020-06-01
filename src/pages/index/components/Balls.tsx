import React from 'react'
import { BallColor } from '../constants'
import Ball from './Ball'
import _ from 'lodash'

interface Props {
  count: number
  typeColor: BallColor
  maxCount: number
  defaultVal: number[]
  updateCallback: Function
}

export default class Balls extends React.Component {
  constructor(props: Props) {
    super(props)
    this.state = {
      color: this.props.typeColor,
      numbers: _.map(new Array(this.props.count), (item, i) => {
        const num = i + 1 + ''
        if (num.length === 1) {
          return '0' + num
        }
        return num + ''
      }),
      selectedNumbers: [],
      isMax: false,
    }
  }

  clickCallbak = (number, isSelected) => {
    if (isSelected && this.state.isMax) {
      return
    }
    this.updateSelected(number, isSelected)
  }

  updateSelected = (number, isSelected) => {
    const numbers = this.state.selectedNumbers
    if (isSelected) {
      numbers.push(number)
    } else {
      _.remove(numbers, item => number)
    }
    numbers.sort()
    this.setState({
      selectedNumbers: numbers,
      isMax: numbers.length >= this.props.maxCount,
    })
    this.props.updateCallback(this.state.selectedNumbers)
  }

  render() {
    return <div className="balls-box">
      { _.map(this.state.numbers, (item, i) => {
        return <Ball key={ i } color={ this.state.color } size={ 25 } number={ item } canClick={ !this.state.isMax }
                     clickCallbak={ this.clickCallbak }></Ball>
      }) }
    </div>
  }
}