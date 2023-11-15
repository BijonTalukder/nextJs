import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;

const RootLayout =({children})=>{

    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (  <Layout className="layout">
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        // items={new Array(15).fill(null).map((_, index) => {
        //   const key = index + 1;
        //   return {
        //     key,
        //     label: `nav ${key}`,
        //   };
        // })}
      >
        <Button type='primary'><Link href='/about'> news</Link> </Button>
      </Menu>
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-content"
        style={{
          background: colorBgContainer,
        }}
      >
        {children}
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2023 Created by Ant UED
    </Footer>
  </Layout>)
  
  }
  export default RootLayout