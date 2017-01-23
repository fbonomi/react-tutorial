import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import BaseLayout from '../../layouts/Base/Base';

import Recent from './Recent/Recent';
import Active from './Active/Active';
import TrancheDetail from './TrancheDetail/TrancheDetail';

class Home extends Component {

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
            <div>
                <BaseLayout title="Home" menuItem="home">
                    <Row>
                        <Col xs={9}>
                            Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.
                        </Col>
                        <Col xs={3} className="text-right">
                            <Button bsStyle={ this.state.count%2===0 ? 'success' : 'default' } bsSize="small" onClick={this.handleClick}>
                                Ciao sono { this.state.name }, il count è { this.state.count }
                            </Button>
                        </Col>
                    </Row>
                    <hr />
                    <Row style={ { 'margin-top': '15px' } }>
                        <Col xs={6}>
                            <Recent />
                        </Col>
                        <Col xs={6}>
                            <Active />
                        </Col>
                    </Row>
                    <TrancheDetail />
                </BaseLayout>
            </div>
        );
    }

}

export default Home;
