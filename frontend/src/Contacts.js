import React, {Component} from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const url = 'https://jsonplaceholder.typicode.com/users';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false,
            requestFailedMsg: '',
        };
        this.state.contacts = [];
        this.options = {
            onSizePerPageList: this.sizePerPageListChange.bind(this)
        }
    }

    sizePerPageListChange(sizePerPage) {
        localStorage.setItem('pageItems',sizePerPage);
    }

    componentDidMount() {
        let me = this;

        axios.get(url)
            .then(function (response) {
                console.log(response);
                me.setState({
                    contacts : response.data,
                })
            })
            .catch(function (error) {
                debugger;
                console.log(error);
                me.setState({
                    requestFailed: true,
                    requestFailedMsg: error.message,
                });
            });
    }

    render() {
        const me = this;
        let pageItems = localStorage.getItem('pageItems');
        if (!pageItems) {
            pageItems = 5;
        }
        this.options = {
                page: 1,  // which page you want to show as default
                sizePerPageList: [{
                    text: '5', value: 5
                }, {
                    text: '10', value: 10
                }, {
                    text: '50', value: 50
                }], // you can change the dropdown list for size per page
                sizePerPage: parseInt(pageItems),  // which size per page you want to locate as default
                pageStartIndex: 0, // where to start counting the pages
                paginationSize: 3,  // the pagination bar size.
                prePage: 'Prev', // Previous page button text
                nextPage: 'Next', // Next page button text
                firstPage: 'First', // First page button text
                lastPage: 'Last', // Last page button text
                prePageTitle: 'Go to previous', // Previous page button title
                nextPageTitle: 'Go to next', // Next page button title
                firstPageTitle: 'Go to first', // First page button title
                lastPageTitle: 'Go to Last', // Last page button title
                paginationPosition: 'bottom',  // default is bottom, top and both is all available
                onSizePerPageList: this.sizePerPageListChange
        };

        const tableInstance = (
            <BootstrapTable data={ this.state.contacts } striped={true} hover={true} key={this.state.uuid} pagination={true} options={this.options}>
                  <TableHeaderColumn width='50' dataField='id' isKey={ true } dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                  <TableHeaderColumn width='150' dataField='name' filter={ { type: 'TextFilter', delay: 200 } } dataSort={true}>Name</TableHeaderColumn>
                  <TableHeaderColumn width='250' dataField='username' filter={ { type: 'TextFilter', delay: 200 } } dataSort={true}>Last Name</TableHeaderColumn>
            </BootstrapTable>
        );

        if (this.state.requestFailed) return <p>Failed! {this.state.requestFailedMsg}</p>
        if (!this.state.contacts) return <p>Loading...</p>

        return (tableInstance)
    }
}

export default Contacts;

