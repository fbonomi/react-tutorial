// General
import { updateObject } from '../../core/Utils';

export function updateListItems(type, state, items) {
    return updateObject(state, {
        [type]: updateObject(state[type], { items: items })
    });
}