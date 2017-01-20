import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

class Active extends Component {

    render() {
        return (
            <Panel header="Active">
                TODO [{this.props.todos.length}]
                <div className="pull-right">
                    <span onClick={this.props.removeTodo} style={ { cursor: 'pointer' } }>
                        &times; Remove last
                    </span>
                </div>
                <hr />
                <ul>
                    {this.props.todos.map(todo => {
                        return (
                            <li>
                                <strong>{todo.id}</strong>
                                {' '}
                                {todo.name}
                                {'   '}                                
                            </li>
                        )
                    })}
                </ul>
            </Panel>
        );
    }

}

export default Active;