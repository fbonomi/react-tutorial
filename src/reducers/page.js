import { SET_PAGE } from '../actions/page';

function page(state = [], action) {
    switch (action.type) {
        case 'SET_PAGE' :
            return {
                menuItem: action.menuItem,
                title: action.title,
            };
        default:
            return state;
    }
}

export default page;