import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import FetchDepts from './components/FetchDepts';
import { AddDept } from './components/AddDepts';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/fetch-depts' component={FetchDepts} />
                <Route path='/adddept' component={AddDept} />
                <Route path='/depts/edit/:deptNo' component={AddDept} />
            </Layout>
        );
    }
}