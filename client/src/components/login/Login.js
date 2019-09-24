import React from 'react'
import { Layout, Form, Icon, Input, Button, Typography} from 'antd'
import { gql } from "apollo-boost"
import { useQuery } from '@apollo/react-hooks'

const { Content } = Layout
const { Title } = Typography

const GET_USER_BY_MAIL = gql`
    query ($email: String!){
        getUserByEmail(email: $email){
            _id
            username
            email
        }
    }
`;


export const handleSubmit = data => {
    
}

const Login = () => {
    
    const [getUserByEmail ,{ loading, error, data }] = useQuery(GET_USER_BY_MAIL);
    console.log('data :', data)
    console.log('error :', error)
    console.log('loading :', loading)
    return (
        <Layout style={StyleLayout}>
            <Content style={StyleContent}>
                <div>
                    <Title level={3} style={{textTransform: 'capitalize', textAlign: 'center', marginBottom: '40px'}}>authentication authorization user</Title>
                </div>
                
                <Form onSubmit={e => {  e.preventDefault();  console.log(e.target.elements);  getUserByEmail({ variables: {email: e.target.elements.Username.value, password: e.target.elements.password.value} });}} style={StyleForm}>
                    <Form.Item>
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            name='Username'
                            />
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
                        
                        <Button type="primary" htmlType="submit" style={{width: '100%'}} >
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