import React from 'react';
import { Link } from 'react-router';

import Navbar from './Navbar/Navbar';

const Main = React.createClass({

    render() {
        // Then we go ahead and return some JSX

        // <h1><Link to="/">Reduxstagram</Link></h1>
        return (
            <div>
                <Navbar></Navbar>
                {/* We use cloneElement here so we can auto pass down props */}
                { React.cloneElement(this.props.children, this.props) }
                <div className="container">
                    <hr />
                    &copy; 2017 - Federico
                </div>
            </div>
        );
    }

});

export default Main;