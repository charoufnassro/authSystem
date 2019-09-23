import React from 'react'
import { Layout, Form, Icon, Input, Button } from 'antd'

const { Content } = Layout

const handleSubmit = e => {

}

const Login = () => {
    return (
        <Layout style={StyleLayout}>
            <Content style={StyleContent} >
                <Form onSubmit={handleSubmit} style={{background: '#fff', padding: '50px', width: "400px"}}>
                    <Form.Item>
                            <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email"
                            />
                    </Form.Item>
                    <Form.Item>
                        
                        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                            Log in
                        </Button>
                        <a style={{float: 'right'}} href="">
                            Forgot password
                        </a>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}

export default Login

const StyleLayout = {
    height: '100vh',
    width: '100%',
}

const StyleContent = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}