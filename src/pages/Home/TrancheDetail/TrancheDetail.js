import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import _ from 'underscore';

class TrancheDetail extends Component {

    render() {
        const { tranche } = this.props.dashboard;
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
