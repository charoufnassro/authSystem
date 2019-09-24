Server Side
Setting up express

npm i express 

install nodemon for restart server automatecly after change

npm i nodemon

setup apollo server and graphql for build our REST API

npm install --save apollo-server-express graphql-tools graphql body-parser

Install ans Setup Mongoose to connect to database

npm install mongoose

configuration at server/DBConfig/config.js file

add schema and resolvers to apolloServer

create models to use in mongo database at server/DBConfig/models folder

Client Side
we use reactjs framework in frontend 

create-react-app client 

install apolloClient and graphql

npm install apollo-boost @apollo/react-hooks graphql

configure apolloClient 

add antd 

Authentication vs Authorization
Authentication is the act of matching a session with a given user. Example, given a session I can securely identify the user is user_id 123.
Authorization is the act determining if a given user can access a given resource. Example, given two users, an admin and a super admin; admins are authorized to see invoices but can’t delete them; super admins are authorized to see and delete invoices.

install and use joi validation for validate input or fields user
