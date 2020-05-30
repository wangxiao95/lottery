import React from 'react'
import Balls from './Balls'
import {BallColor} from '../constants'
import {Button, Card, Col, Row, Table} from 'antd'
import shuangSeQiu from 'core/Ball'

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
      columns: [
        {
          title: '红球',
          dataIndex: 'red',
          key: 'red',
        },
        {
          title: '篮球',
          dataIndex: 'blue',
          key: 'blue',
        },
        {
          title: '预选',
          dataIndex: 'pre',
          key: 'pre',
        }
      ]
    }
  }

  getResult = () => {
    const result = shuangSeQiu(this.state.result.red, this.state.result.blue)
    const ballList = [...this.state.ballList]
    ballList.push(result)
    const tableData = [...this.state.tableData]
    tableData.push({
      key: this.state.tableData.length + 1 + '',
      red: result.red.join(','),
      blue: result.blue.join(','),
      pre: JSON.stringify(this.state.result)
    })
    this.setState({
      ballList: ballList,
      tableData: tableData,
    })
    console.log(this.state);
  }

  updateResult = (numbers, type) => {
    const result = this.state.result
    result[type] = numbers
    this.setState({
      result
    })
  }

  render() {
    const redTitle = <span>
      <img src="./index/images/ball_red.gif" alt=""/> 红球预选
    </span>
    const blueTitle = <span>
      <img src="./index/images/ball_blue.gif" alt=""/> 蓝球预选
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
      <div style={{textAlign: 'center'}}>
        <Button type="primary" onClick={this.getResult}>Primary</Button>
      </div>,
      <Table dataSource={this.state.tableData} columns={this.state.columns}/>
  ]
    // return <div className="balls-block">
    //   <Balls count={ 33 } color={ BallColor.red }></Balls>
    //   <Balls count={16} color={BallColor.blue}></Balls>
    // </div>
  }
}