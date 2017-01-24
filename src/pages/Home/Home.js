import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import './Home.css';
import BaseLayout from '../../layouts/Base/Base';

import Recent from './Recent/Recent';
import Active from './Active/Active';
import TrancheDetail from './TrancheDetail/TrancheDetail';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tranche: {},
        };
    }

    setDeal(item, event) {
        this.setState(prevState => ({
            tranche: (! _.isEqual(prevState.tranche, item) ? item : {}),
        }));
    }

    handleChildFunc() {
        alert("il child mi ha triggato");
    }

    siblingAddTodoFunc() {
        this.setState(prevState => ({
            todos: prevState.todos.concat({ 
                id: (prevState.todos.length + 1), 
                name: 'Prova' 
            }),
        }));
    }

    removeTodo() {
        this.setState(prevState => {
            return {
                todos: prevState.todos.slice(0, prevState.todos.length - 1),
            }
        });
    }

    render() {
        return (
            <div>
                <BaseLayout title="Home" menuItem="home">
                    <Row style={ { 'margin-top': '15px' } }>
                        <Col xs={6}>
                            <Recent tranche={this.state.tranche} setDeal={this.setDeal.bind(this)} />
                        </Col>
                        <Col xs={6}>
                            <Active tranche={this.state.tranche} setDeal={this.setDeal.bind(this)} />
                        </Col>
                    </Row>
                    <TrancheDetail tranche={this.state.tranche} />
                </BaseLayout>
            </div>
        );
    }

}

export default Home;
