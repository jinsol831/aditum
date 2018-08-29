import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, Filter, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Employee" source="employeeId" reference="employees" allowEmpty>
            <SelectInput optionText="firstName" />
        </ReferenceInput>
    </Filter>
);

export const UserList = (props) => (
    <List {...props} filters={<UserFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.rdfUID}
                    secondaryText={record => `${record.lastName}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="rdfUID'" />
                    <TextField source="firstName" />
                    <TextField source="lastName" />
                    <TextField source="title" />
                    <TextField source="department" />
                    <TextField source="email" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.title}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="department" />
            <TextInput source="email" />
            <TextInput source="telephone" />
            <TextInput source="rdfUID" />
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="department" />
            <TextInput source="email" />
            <TextInput source="telephone" />
            <TextInput source="rdfUID" />
        </SimpleForm>
    </Create>
);