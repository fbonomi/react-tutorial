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
            propA: 'propA',
            todos: [],
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
                    <Row>
                        <Col xs={9}>
                            Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
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
                            <Recent count={this.state.todos.length} addTodoFunc={this.siblingAddTodoFunc.bind(this)} />
                        </Col>
                        <Col xs={6}>
                            <Active todos={this.state.todos} removeTodo={this.removeTodo.bind(this)}/>
                        </Col>
                    </Row>
                    <TrancheDetail />
                </BaseLayout>
            </div>
        );
    }

}

export default Home;
