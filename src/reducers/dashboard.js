// General
import { updateObject } from '../core/Utils';
import _ from 'underscore';

// Actions
import { REQUEST_LIST, RECEIVE_LIST } from '../actions/dashboard/list';
import { SELECT_TRANCHE } from '../actions/dashboard/tranche';

// Functions
import { updateListItems } from './dashboard/list.js'


function foo(state = [], action) {
    switch (action.type) {
        case REQUEST_LIST:
            return updateListItems(action.section, state, []);
        case RECEIVE_LIST:
            return updateListItems(action.section, state, action.list);
        case SELECT_TRANCHE:
            var tranche = (!_.isEqual(state.tranche, action.item) ? action.item : {})
            return updateObject(state, {
                tranche: tranche
            });
        default:
            return state;
    }
}

export default foo;