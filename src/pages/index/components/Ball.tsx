import React from 'react'
import {BallColor} from '../constants'

interface Props {
  key: number
  color?: BallColor
  number?: number
  size: number
  canClick: boolean
  clickCallbak: Function
}

export default class Ball extends React.Component {
  constructor(props: Props) {
    super(props)
    this.state = {
      color: BallColor.transparent
    }
  }

  styles() {
    return {
      width: `${ this.props.size }px`,
      height: `${ this.props.size }px`,
    }
  }

  onBallClick = () => {
    const isSelected = this.state.color === this.props.color
    if (!isSelected && !this.props.canClick) {
      return
    }
    this.setState({
      color: isSelected ? BallColor.transparent : this.props.color
    })
    this.props.clickCallbak(this.props.number, !isSelected)
  }

  render() {
    const css = `ball is-${ this.state.color }`
    return <a className={ css } style={ this.styles() } onClick={this.onBallClick}>{ this.props.number }</a>
  }
}