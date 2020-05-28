import React, { Component } from 'react'
import { render } from 'react-dom'
import shuangSeQiu from '@/core/ball'
import Index from '@/pages/index'

console.log(shuangSeQiu())

render(<Index/>, document.getElementById('app'))