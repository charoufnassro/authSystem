import React, { Component } from 'react'
import { Layout, Form, Icon, Input, Button, Typography} from 'antd'
import QueryLogin from './QueryLogin'

const { Content } = Layout
const { Title } = Typography

const laodQuery = (username) => {
    console.log(<QueryLogin email={username} />)
}

class Login extends Component {
    constructor() 
        {super()
            this.username = React.createRef();
        }

    render(){
        
        return (
            <Layout style={StyleLayout}>
                <Content style={StyleContent}>
                    <div>
                        <Title level={3} style={{textTransform: 'capitalize', textAlign: 'center', marginBottom: '40px'}}>authentication authorization user</Title>
                    </div>
                    
                    <Form  style={StyleForm}>
                        <Form.Item>
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                name='Username'
                                ref={this.username}
                                />{console.log('username',this.username.current)}
                        </Form.Item>
                        <Form.Item>
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                name='password'
                                />
                        </Form.Item>
                        <Form.Item>
                            
                            <Button type="primary" htmlType="submit" style={{width: '100%'}} onClick={laodQuery(this.username.current)}>
                                Login
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
}

export default Login

const StyleLayout = {
    height: '100vh',
    width: '100%',
}

const StyleContent = {
    position: 'absolute',
    left: '50%',
    top: '40%',
    transform: 'translate(-50%, -50%)',
}

const StyleForm = {
    background: '#fff',
    padding: '50px',
    width: "400px",
    borderRadius: '5px',
}