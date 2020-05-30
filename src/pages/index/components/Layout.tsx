import React, { FC } from 'react'
import { Layout } from 'antd'
import Main from './Main'

const { Header, Footer, Sider, Content } = Layout

const Page: FC = () => {
  return  <Layout>
    <Header className="page-header">Header</Header>
    <Content className="page-content">
      <Main></Main>
    </Content>
    <Footer className="page-footer">Footer</Footer>
  </Layout>
}
export default Page