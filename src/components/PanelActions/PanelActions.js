import React, { Component } from 'react';
import './PanelActions.css';

class PanelActions extends Component {
    render() {
        return (
            <div className="panel-actions">
                {this.props.children}
            </div>
        );
    }
}

export default PanelActions;