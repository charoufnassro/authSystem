const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const dotenv = require('dotenv');
const {User} = require('./DBConfig/models/User')


dotenv.config();

const Port = process.env.PORT_SERVER || 4000;

require('./DBConfig/config')


const typeDefs = gql`
    type Query {
        getUsers: [User],
        getUserByEmail(email: String!): [User],
    }

    type User {
        _id: ID!,
        username: String!,
        email: String!,
        password: String!,
        bio: String,
        image: String,
        hash: String,
        salt: String,
        date: String
    }
    input userInput {
        username: String!,
        email: String!,
        password: String!,
        bio: String,
        image: String,
        hash: String,
        salt: String,
    }
    type Mutation {
        addUser(username: String!,
                email: String!,
                password: String!,
                bio: String,
                image: String,
                hash: String,
                salt: String): User
        deleteUser(id: ID!): User
        updateUser(id: ID!, inputUser: userInput): User
    }
`;

const resolvers = {
    Query: {
            getUsers: async () => {
                try {
                    return await User.find({});
                } catch(e) {
                    return e.message;
                }
            },
            getUserByEmail: async (_, args) => {
                console.log('Data : ', args)
                try {
                    return await User.find(args);
                } catch(e) {
                    return e.message;
                }
            }
        },
    Mutation: {
            addUser: async (_, args) => {
                try {
                    console.log("added")
                    console.log('args : ', args)
                    let response = await User.create(args);
                    return response;
                } catch(e) {
                    return e.message;
                }
            },
            deleteUser: async (_,user) => {
                try {
                    console.log("deleted")
                    let response = await User.findByIdAndRemove(user.id);
                    return response;
                } catch(e) {
                    return e.message;
                }
            },
            updateUser: async (_, {id,inputUser}) => {
                try {
                    
                    let _id= id
                    let _inputUser={username: inputUser.username, email: inputUser.email, sexe: inputUser.sexe}
                    console.log("update", _id)
                    let response = await User.findOneAndUpdate({_id}, _inputUser, { new: true});
                    return response;
                } catch(e) {
                    return e.message;
                }
            }
            
        }
    };

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();
server.applyMiddleware({app});

app.listen({port: Port}, ()=> console.log(`Server ready at : http://localhost:${Port}${server.graphqlPath}`))