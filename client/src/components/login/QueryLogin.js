import React from 'react'
import { gql } from "apollo-boost"
import { useQuery } from '@apollo/react-hooks'


const GET_USER_BY_MAIL = gql`
    query($email: String!){
        getUserByEmail(email: $email){
            _id
            username
            email
        }
}
`;

const QueryLogin = () => {
    const { loading, error, data } = useQuery(GET_USER_BY_MAIL, {
        variables: {email: "email1"}
    });
        console.log('data :', data)
        console.log('error :', error)
        console.log('loading :', loading)
    return (
        {loading, error, data}
    )
}

export default QueryLogin
