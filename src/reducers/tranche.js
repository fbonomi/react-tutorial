import _ from 'underscore';
import { SELECT_TRANCHE } from '../actions/actionCreators';

function tranche(state = [], action) {
    switch (action.type) {
        case SELECT_TRANCHE:
            return (!_.isEqual(state, action.item) ? action.item : {})
        default:
            return state;
    }
}

export default tranche;