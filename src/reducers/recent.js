import { REQUEST_RECENT, RECEIVE_RECENT } from '../actions/actionCreators';

function recent(state = [], action) {
    switch (action.type) {
        case REQUEST_RECENT:
            return [];
        case RECEIVE_RECENT:
            return action.list;
        default:
            return state;
    }
}

export default recent;