import React from 'react'
import { BallColor } from '../constants'

interface Props {
  color?: BallColor
  number?: number
  size: number
}

export default class Ball extends React.Component {
  constructor(props: Props) {
    super()
    this.state = {

    }
  }

  styles() {
    return {
      width: `${ this.props.size }px`,
      height: `${ this.props.size }px`,
    }
  }

  render() {
    const css = `ball is-${ this.props.color }`
    return <div className={ css } style={ this.styles() }>{ this.props.number }</div>
  }
}