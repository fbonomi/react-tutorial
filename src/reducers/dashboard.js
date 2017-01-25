import { REQUEST_RECENT, RECEIVE_RECENT } from '../actions/recent';
import { REQUEST_ACTIVE, RECEIVE_ACTIVE } from '../actions/active';
import { SELECT_TRANCHE } from '../actions/tranche';

import _ from 'underscore';

function foo(state = [], action) {
    switch (action.type) {
        case REQUEST_RECENT:
            return Object.assign({}, state, { recent: []});
        case RECEIVE_RECENT:
            return Object.assign({}, state, { recent: action.list});
        case REQUEST_ACTIVE:
            return Object.assign({}, state, { active: []});
        case RECEIVE_ACTIVE:
            return Object.assign({}, state, { active: action.list});
        case SELECT_TRANCHE:
            var tranche = (!_.isEqual(state.tranche, action.item) ? action.item : {})
            return Object.assign({}, state, { tranche: tranche});
        default:
            return state;
    }
}

export default foo;