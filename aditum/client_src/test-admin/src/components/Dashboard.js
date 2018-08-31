import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import logo from '../logo.png';

export default () => (
    <Card>
        <CardHeader title="Welcome to the Aditum Dashboard" />
        <img src={logo} className="App-logo" alt="logo" />
    </Card>
);