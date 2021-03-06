// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserCreate } from './components/posts';
import { EmployeeList } from './components/employees';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
//import dataProvider from './components/dataProvider';
import loopbackRestClient from 'aor-loopback';
import { createMuiTheme } from '@material-ui/core/styles';
//implement Arduino H/W logic
//var arduServer = require('./components/arduServer');



//Theming
const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },

  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
        // '-apple-system',
        // 'BlinkMacSystemFont',
        // "Segoe UI",
        'Quicksand',
        'sans-serif',
    ].join(','),
},


overrides: {
  MuiButton: { // override the styles of all instances of this component
      root: { // Name of the rule
          color: 'white', // Some CSS
      },
  },
},



});

// const muiTheme = getMuiTheme({
//   palette: {
//     textColor: indigo900,
//   },
//   appBar: {
//     height: 50,
//   },
// });


//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = loopbackRestClient('http://localhost:3000/api/employees?access_token=GkXxHBfnmEnikuoOE3tuZm5OpgXVxSFn5VCUz3xDJRLXHufgRqspMpeLxzO6vSGK');

const App = () => (
  <Admin title="Administration" theme={theme} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} restClient={loopbackRestClient('http://localhost:3000/api/employees?access_token=GkXxHBfnmEnikuoOE3tuZm5OpgXVxSFn5VCUz3xDJRLXHufgRqspMpeLxzO6vSGK')}>
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={PostIcon} />
      <Resource name="employees" list={EmployeeList} icon={UserIcon} />
  </Admin>
);

export default App;

