# React CRA with SQL Node API 

## Running the Project
- You will need Node JS to be installed besides MS SQL Server installed on your machine.
Node can be downloaded form [NodeJS](https://nodejs.org/en/) prefer Node 8.11.x
- Once done open up cmd or bash in this folder and type the below command to install all the dependencies
```
npm install
```
Once done you are all set with your development Environment.

## Helpful Scripts
```
npm start
``` 
This command will start dev server in hot reaload mode i.e. any changes in either server or the client side will reload the server to serve fresh content upon save.


## Configurations
### Server Configuration

The server config files are under server/config folder. 
- mssql.js is file for configurating sql server connection strings. Currently connection string are pointing towards Azure SQL instance, but the connection string will work for SQL express 2012 as well. Documentation for the same is available on their [MSSQL GitHub Page](https://github.com/tediousjs/node-mssql)
- server.js is for controlling the port number and anything associated to main server.


### Client Configuration (React)
Any configurable items such as API endpoint, useAuthentication etc. should be put in config.js file(present in root folder).

## Pending Items
### Server Side Items
- [ ] Persist SQL connection, currently working on pool connection.
- [x] Avoid Templating Query (Possibility of SQL injection).

### Client Side Items
- [ ] Include Redux, for better state Management(Low Priority item)
- [ ] Check with team about Design Mythology(Currently [React-Materialize](https://react-materialize.github.io/#/)) is being used. Other Alternative are [React - Strap](https://reactstrap.github.io/) (React+Bootstrap4), [Material UI](https://material-ui.com/), [Ant - Design](https://ant.design/docs/react/introduce)  & [Bulma](https://github.com/couds/react-bulma-components).
