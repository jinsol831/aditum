import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const EmployeeList = (props) => (
    <List title="All Employees" {...props}>
        <Datagrid>
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="department" />
            <TextField source="email" />
            <TextField source="telephone" />
            <TextField source="rfdUID" />
        </Datagrid>
    </List>
);