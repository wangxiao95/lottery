import React, { FC } from 'react'
import { Layout } from 'antd'
import Main from './Main'
import Head from './Header'

const { Header, Footer, Sider, Content } = Layout

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <Layout>
      <Head className="page-header"></Head>
      <Content className="page-content">
        <Main></Main>
      </Content>
      {/*<Footer className="page-footer">Footer</Footer>*/ }
    </Layout>
  }
}


