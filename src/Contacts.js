import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ContactRow from './ContactRow';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const contacts = 'http://localhost:8081/contacts';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
        this.state.contacts = [];
    }

    componentDidMount() {
        //TODO: użyć https://github.com/axios/axios
        let me = this;

        axios.get(contacts)
            .then(function (response) {
                console.log(response);
                me.setState({
                    contacts : response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let me = this;
        const tableInstance = (
    <BootstrapTable data={ this.state.contacts } striped={true} hover={true} key={this.state.uuid}>
          <TableHeaderColumn width='50' dataField='uuid' isKey={ true } dataAlign="center">ID</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='first_name' filter={ { type: 'TextFilter', delay: 200 } } dataSort={true}>Name</TableHeaderColumn>
          <TableHeaderColumn width='250' dataField='last_name' filter={ { type: 'TextFilter', delay: 200 } } dataSort={true}>Last Name</TableHeaderColumn>
          <TableHeaderColumn width='auto' dataField='email_lawyers_register' filter={ { type: 'TextFilter', delay: 200 } } dataSort={true}>Email</TableHeaderColumn>
          <TableHeaderColumn width='auto' dataField='name' filter={ { type: 'TextFilter', delay: 200 } } dataSort={true}>Custom name</TableHeaderColumn>
          <TableHeaderColumn>AKCJA</TableHeaderColumn>
    </BootstrapTable>
        );

        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.contacts) return <p>Loading...</p>

        return (tableInstance)
    }
}

export default Contacts;

