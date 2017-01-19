import React, { Component } from 'react';
import { Row, Col, Panel, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class UsersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Federico',
            surname: 'Bonomi',
            email: '',
            phone: '',
        };

        // This binding is necessary to make `this` work in the callback
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleSave() {
        alert("TODO - save");
        return false;
    }

    handleCancel() {
        this.setState(prevState => ({
            name: '',
            surname: '',
            email: '',
            phone: '',
        }));
        return false;
    }

    render() {
        return (
            <Panel header="New User / Edit Userrrrrr">
                <Form horizontal>
                    <Row>
                        <Col xs={6}>
                            <FormGroup controlId="name">
                                <Col componentClass={ControlLabel} xs={3}>
                                    Name
                                </Col>
                                <Col xs={9}>
                                    <FormControl type="text" value={this.state.name} />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col xs={6}>
                            <FormGroup controlId="surname">
                                <Col componentClass={ControlLabel} xs={3}>
                                    Surname
                                </Col>
                                <Col xs={9}>
                                    <FormControl type="text" value={this.state.surname} />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <FormGroup controlId="email">
                                <Col componentClass={ControlLabel} xs={3}>
                                    Email
                                </Col>
                                <Col xs={9}>
                                    <FormControl type="text" value={this.state.email} />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col xs={6}>
                            <FormGroup controlId="phone">
                                <Col componentClass={ControlLabel} xs={3}>
                                    Phone
                                </Col>
                                <Col xs={9}>
                                    <FormControl type="text" value={this.state.phone} />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <FormGroup>
                                <Col smOffset={3} sm={9}>
                                    <Button type="submit" bsStyle="primary" onClick={this.handleSave}>
                                        Save
                                    </Button>
                                    <Button type="submit" bsStyle="link" onClick={this.handleCancel}>
                                        Cancel
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Panel>
        );
    }
}

export default UsersForm;