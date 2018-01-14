import React, {Component} from 'react';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

const template = [];

class LoremIpsum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false,
            requestFailedMsg: '',
            data: [],
        };
    }

    componentDidMount() {
        let me = this;

        axios.get(url)
            .then(function (response) {
                console.log(response);
                response.data.map((item) => {
                    template.push(
                        item
                    )
                });
                me.setState({
                    data : response.data
                });
            })
            .catch(function (error) {
                console.log(error);
                me.setState({
                    requestFailed: true,
                    requestFailedMsg: error.message,
                });
            });
    }

    render() {
        if (this.state.requestFailed) return <p>Failed! {this.state.requestFailedMsg}</p>
        if (this.state.data.length < 1) return <p>Loading...</p>

        return (
            <div>
                {template.map(item => <div> <h3>{item.title}</h3><p>{item.body}</p> </div>)}
            </div>
        )

    }
}

export default LoremIpsum;
