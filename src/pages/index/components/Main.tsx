import React from 'react'
import Balls from './Balls'
import {BallColor} from '../constants'
import {Button, Card, Col, Divider, Row, Table, message} from 'antd'
import {ProfileOutlined} from '@ant-design/icons'
import shuangSeQiu from 'core/Ball'
import redImg from '../images/ball_red.gif'
import blueImg from '../images/ball_blue.gif'
import Ball from "./Ball";
import _ from 'lodash'

message.config({
  top: 80,
  duration: 2,
  maxCount: 3,
  rtl: true,
});

export default class Main extends React.Component {
  constructor(props) {
    super()
    this.state = {
      result: {
        red: [],
        blue: []
      },
      tableData: [],
      ballList: [],
      resultsText: '',
      columns: [
        {
          title: '红球',
          dataIndex: 'red',
          width: '30%',
          key: 'red',
          align: 'center',
          render: data => {
            return <div className="balls-box__center">
              {_.map(data, (item, i) => {
                return <Ball key={i} realColor={BallColor.red} size={25} number={item}></Ball>
              })}
            </div>
          }
        },
        {
          title: '蓝球',
          dataIndex: 'blue',
          width: '10%',
          key: 'blue',
          align: 'center',
          render: data => {
            return <div className="balls-box__center">
              <Ball realColor={BallColor.blue} size={25} number={data}></Ball>
            </div>
          }
        },
        {
          title: '我的预选',
          dataIndex: 'pre',
          key: 'pre',
          width: '30%',
          align: 'center',
          render: data => {
            const {red, blue} = data
            const content = <span className="balls-box__center">
              {_.map(red, (item, i) => {
                return <Ball key={i} realColor={BallColor.red} size={25} number={item}></Ball>
              })}
              {_.map(blue, (item, i) => {
                return <Ball key={i} realColor={BallColor.blue} size={25} number={item}></Ball>
              })}
            </span>

            return <div>
              {(_.isEmpty(red) && _.isEmpty(blue)) ? '无' : content}
            </div>
          }
        },
        {
          title: '复制',
          dataIndex: 'copy',
          key: 'copy',
          width: '20%',
          align: 'center',
          render: data => {
            const {red, blue} = data
            return red.join(' ') + ' -- ' + blue.join()
          }
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          width: '10%',
          align: 'center',
          render: (data, row, i) => {
            return <Button type="link" danger onClick={() => {
              this.remove(i)
            }}>删除</Button>
          }
        }
      ]
    }
  }

  remove = (index) => {
    console.log(index);
    const result = [...this.state.tableData]
    const ballList = [...this.state.ballList]
    result.splice(index, 1)
    ballList.splice(index, 1)
    this.setState({
      ballList,
      tableData: result,
    })
  }

  getResult = () => {
    const result = shuangSeQiu([...this.state.result.red], [...this.state.result.blue])
    const ballList = [...this.state.ballList]
    ballList.unshift(result)
    const tableData = [...this.state.tableData]
    tableData.unshift({
      key: this.state.tableData.length + 1 + '',
      red: result.red,
      blue: result.blue,
      copy: result,
      pre: {...{red: [...this.state.result.red], blue: [...this.state.result.blue]}}
    })
    this.setState({
      ballList: ballList,
      tableData: tableData,
    })
    let text = _.map(ballList, item => {
      const {red, blue} = item
      return red.join(' ') + ' -- ' + blue.join('')
    })
    text = text.join('\n').replace(/\\n/g, '<br />');
    this.setState({
      resultsText: text
    })
  }

  updateResult = (numbers, type) => {
    const result = this.state.result
    result[type] = numbers
    this.setState({
      result
    })
  }

  export = () => {
    document.getElementById('copyText').select()
    document.execCommand("copy")
    // message.success('复制成功')
    message.success({
      content: '复制成功',
      // className: 'custom-message',
      style: {
        // fontSize: '20px',
      },
    })
  }

  render() {
    const redTitle = <span className="card-title">
      <img src={redImg} alt=""/> 红球预选
    </span>
    const blueTitle = <span className="card-title">
      <img src={blueImg} alt=""/> 蓝球预选
    </span>
    return [<Row gutter={16}>
      <Col span={12}>
        <Card title={redTitle} bordered={false}>
          <Balls count={33} typeColor={BallColor.red} maxCount={5} defaultVal={this.state.result.red}
                 updateCallback={numbers => {
                   this.updateResult(numbers, 'red')
                 }}></Balls>
        </Card>
      </Col>
      <Col span={12}>
        <Card title={blueTitle} bordered={false}>
          <Balls count={16} typeColor={BallColor.blue} maxCount={1} defaultVal={this.state.result.red}
                 updateCallback={numbers => {
                   this.updateResult(numbers, 'blue')
                 }}></Balls>
        </Card>
      </Col>
    </Row>,
      <Divider>
        <Button type="ghost" danger onClick={this.getResult}>生成</Button>
      </Divider>,
      <div className="table-wrapper">
        <div className="table-wrapper__title">
          <span><ProfileOutlined className="title-icon"/> 选择结果</span>
          <Button type="ghost" danger onClick={this.export}>复制到粘贴板</Button>
        </div>
        <Table bordered
               pagination={{total: this.state.tableData.length, pageSize: 6, showTotal: total => `共 ${total} 组`}}
               dataSource={this.state.tableData} columns={this.state.columns}/>
      </div>,
      <textarea id="copyText" value={this.state.resultsText}></textarea>
  ]
    // return <div className="balls-block">
    //   <Balls count={ 33 } color={ BallColor.red }></Balls>
    //   <Balls count={16} color={BallColor.blue}></Balls>
    // </div>
  }
}