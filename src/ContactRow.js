import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class ContactRow extends React.Component {

    render() {
        return (
            <tr key={this.props.customName.id}>
                <td>{this.props.customName.id}</td>
                <td>{this.props.customName.first_name}</td>
                <td>{this.props.customName.last_name}</td>
                <td>{this.props.customName.email}</td>
                <td><Link to={`/contact/${this.props.customName.id}`}><Button bsStyle="info" bsSize="small">Pokaż</Button></Link></td>
            </tr>
        );
    }
}

export default ContactRow;
