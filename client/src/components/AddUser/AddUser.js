import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Button, Input, Select, Form, Icon } from 'antd'

const { Option } = Select

const ADD_USER = gql`
  mutation AddUser($userName: String!, $email: String!, $sexe: String!) {
    addUser(userName: $userName, email: $email, sexe: $sexe){
      userName
      email
      sexe
    }
  }
`;

const GET_USERS = gql`
  {
    getUsers{id userName email sexe}
  }
`;


export default function AddUser(props) {
    const [addUser, { data }] = useMutation(
      ADD_USER,
      { refetchQueries: [{query: GET_USERS}] }
      );

    return (
        <div>
           <Form layout="vertical" onSubmit={e => {
            e.preventDefault();
            console.log(e.target.elements)
            addUser({ variables: {userName: e.target.elements.userName.value, email: e.target.elements.email.value, sexe: e.target.elements.sexe.value } });
            e.target.elements.userName.value = '';
            e.target.elements.email.value = '';
            e.target.elements.sexe.value= '';
          }}>
            <Form.Item >
              
                <Input
                  name="userName"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your username"
                />
            </Form.Item>
            <Form.Item >
              
                <Input
                  name="email"
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your email"
                />
            </Form.Item>
            <Form.Item >
              
                <Input
                name="sexe"
                  prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your sexe"
                />
            </Form.Item>
              <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e8e8e8',
                    padding: '10px 16px',
                    textAlign: 'right',
                    left: 0,
                    background: '#fff',
                    borderRadius: '0 0 4px 4px',
                    }}
                >
                    <Button
                    style={{
                        marginRight: 8,
                    }}
                    onClick={props.closeDrawer}
                    >
                    Back
                    </Button>
                    <Button onClick={props.closeDrawer} type="primary" htmlType='submit' icon='user-add'>
                    Add 
                    </Button>
              </div>
          </Form>
      </div>
    )
}