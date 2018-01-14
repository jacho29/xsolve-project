import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const contactUrl = id => `http://localhost:8081/contacts/${id}`;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
        this.state.contact = [];
    }

    componentDidMount() {
        let me = this;
        //TODO: użyć https://github.com/axios/axios

        axios.get(contactUrl(me.props.match.params.id))
            .then(function (response) {
                console.log(response);
                me.setState({
                    contact: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const contactData = (
            <h3>{this.state.contact.first_name} {this.state.contact.last_name} | {this.state.contact.email}</h3>
        );

        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>E-Mail</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                <tr key={this.state.contact.id}>
                    <td>{this.state.contact.id}</td>
                    <td>{this.state.contact.first_name}</td>
                    <td>{this.state.contact.last_name}</td>
                    <td>{this.state.contact.email}</td>
                    <td><Button bsStyle="info" bsSize="small">USUŃ</Button>  <Button bsStyle="info" bsSize="small">EDYTUJ</Button></td>
                </tr>
                </tbody>
            </Table>


        )

        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.contact) return <p>Loading...</p>

        return (contactData)
    }
}

export default Contact;

