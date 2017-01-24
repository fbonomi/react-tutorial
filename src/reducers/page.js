import { SET_PAGE } from '../actions/page';

function page(state = [], action) {
    switch (action.type) {
        case 'SET_PAGE' :
            return action.item;
        default:
            return state;
    }
}

export default page;