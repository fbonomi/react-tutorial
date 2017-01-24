import React from 'react';

const Auth = React.createClass({

    render() {
        // Then we go ahead and return some JSX

        // <h1><Link to="/">Reduxstagram</Link></h1>
        return (
            <div style={ { width: '400px', margin: '100px auto 0 auto' } }>

                {/* We use cloneElement here so we can auto pass down props */}
                { React.cloneElement(this.props.children, this.props) }
            </div>
        );
    }

});

export default Auth;