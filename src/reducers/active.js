import { REQUEST_ACTIVE, RECEIVE_ACTIVE } from '../actions/actionCreators';

function active(state = [], action) {
    switch (action.type) {
        case REQUEST_ACTIVE:
            // TODO - capire se gestire un loader
            // forse qui si potrebbe svuotare lo state assegnando []
            return [];
        case RECEIVE_ACTIVE:
            return action.list;
        default:
            return state;
    }
}

export default active;