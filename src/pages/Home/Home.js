import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import './Home.css';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';

import Recent from './Recent/Recent';
import Active from './Active/Active';
import TrancheDetail from './TrancheDetail/TrancheDetail';

class Home extends Component {

    render() {
        return (
            <div>
                <HeaderTitle title="Home" menuItem="home" />
                <div className="container">
                    <Row style={ { 'margin-top': '15px' } }>
                        <Col xs={6}>
                            <Recent {...this.props} />
                        </Col>
                        <Col xs={6}>
                            <Active {...this.props} />
                        </Col>
                    </Row>
                    <TrancheDetail {...this.props} />
                </div>
            </div>
        );
    }

}

export default Home;
