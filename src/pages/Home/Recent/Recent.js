import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

class Recent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonState: 'default',
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            buttonState: (prevState.buttonState === 'default' ? 'success' : 'default'),            
        }));        
    }

    handleTriggerParent() {
        this.props.myFunc();
    }

    render() {
        return (
            <Panel header="Recent">
                <p>sono il contenuto di recent</p>
                <Button bsStyle={this.state.buttonState} bsSize="small" onClick={(e) => { this.handleClick(); this.handleTriggerParent(); }}>
                    Ciao sono recent
                </Button>
            </Panel>
        );
    }

}

export default Recent;
