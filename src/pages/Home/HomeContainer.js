import { bindActionCreators } from 'redux';
import _ from 'underscore';
import { connect } from 'react-redux';

import * as actionList from '../../actions/dashboard/list';
import * as actionTranche from '../../actions/dashboard/tranche';

/*
 Components
 This is where the actual interface / view comes into play
 Everything is in Main - so we import that one
 */

import Home from './Home';

/*
 Mapping
 This is where the magic of redux comes in.
 We need a way to make
 1. our state (our data)
 2. our 'dispatch' functions
 available to the <Main /> component.
 We will surface state and functions via props (this.props.whatever)
 */


/*
 Here we specify which state needs to be made available to the component
 our state.posts and state.comments will be available via this.props.posts and this.props.comments
 */

function mapStateToProps(state) {
    return {
        recent: state.dashboard.recent,
        active: state.dashboard.active,
        tranche: state.dashboard.tranche,
    };
}

/*
 This will bind our actions to dispatch (make the fire-able)
 and make the actions available via props
 */

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        _.extend(actionList, actionTranche),
        dispatch
    );
}


/*
 Here we create an <App/> component which is just our <Main/> component with it's props
 populated with our actions and our state
 We're injecting the data at the top level and passing it down, but you can connect() any component to make the actions and the store available to you.
 */

var HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;