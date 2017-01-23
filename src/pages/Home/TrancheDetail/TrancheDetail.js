import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import _ from 'underscore';

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
        const tranche = this.props.tranche;
        return (
            <div>
                {! _.isEmpty(tranche) &&
                    <Panel header={'Tranche detail: ' + tranche.trancheName}>
                        Sono tranche detail
                    </Panel>
                }
            </div>
        );
    }

}

export default TrancheDetail;
