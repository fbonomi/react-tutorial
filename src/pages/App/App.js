import React, { Component } from 'react';
import './App.css';
import BaseLayout from '../../layouts/Base/Base';
import Button from 'react-bootstrap/lib/Button';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Federico',
            count: 1,
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            //name: prevState.name + 'AAAA',
            count: (prevState.count + 1),
        }));
    }

    render() {
        return (
            <div className="foooooo">
                <BaseLayout title="Home" menuItem="home">
                <p>Sono la pagina homeeee</p>
                <Button bsStyle={ this.state.count%2===0 ? 'success' : 'default' } bsSize="small" onClick={this.handleClick}>
                    Ciao sono { this.state.name }, il count è { this.state.count }
                </Button>
            </BaseLayout>
        </div>
        );
    }

}

export default App;
