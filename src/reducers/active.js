import { REQUEST_ACTIVE, RECEIVE_ACTIVE } from '../actions/active';

function active(state = [], action) {
    switch (action.type) {
        case REQUEST_ACTIVE:
            return [];
        case RECEIVE_ACTIVE:
            return action.list;
        default:
            return state;
    }
}

export default active;