import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

class Recent extends Component {

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
        alert("sono il bottone di recent");
    }

    render() {
        return (
            <Panel header="Recent">
                <p>sono il contenuto di recent</p>
                <Button bsStyle="default" bsSize="small" onClick={this.handleClick}>
                    Ciao sono recent
                </Button>
            </Panel>
        );
    }

}

export default Recent;
