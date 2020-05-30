import React from 'react'
import { render } from 'react-dom'
import shuangSeQiu from 'core/ball'
import Index from 'pages/index'

import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'

moment.locale('zh-cn')

console.log(shuangSeQiu())

render(<Index/>, document.getElementById('app'))