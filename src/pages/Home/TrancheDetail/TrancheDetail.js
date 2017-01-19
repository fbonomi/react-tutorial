import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class TrancheDetail extends Component {

    constructor(props) {
        super(props);
        /*this.state = {
         name: 'Federico',
         count: 1,
         };*/

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        /*this.setState(prevState => ({
         //name: prevState.name + 'AAAA',
         count: (prevState.count + 1),
         }));*/
    }

    render() {
        return (
            <Panel header="Tranche detail">
                Sono tranche detail
            </Panel>
        );
    }

}

export default TrancheDetail;
