import Navigation from '../core/Navigation';

/**
 Action Creators
 These fire events which the reducer will handle
 We will later call these functions from inside our component
 Later these functions get bound to 'dispatch' fires the actual event
 Right now they just return an object
 It's a code convention to use all capitals and snake case for the event names
 We use const to store the name of the event so it is immutable
 */

export function increment(i) {
    return {
        type: 'INCREMENT_LIKES',
        index: i
    };
}

/*
 Comments
 */

export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author, // same as author: author
        comment // same as comment: comment
    };
}

export function removeComment(postId, i){
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    };
}

/*
 Recent
 */

export const REQUEST_RECENT = 'REQUEST_RECENT';
export function requestRecent(){
    return {
        type: REQUEST_RECENT,
    };
}

export const RECEIVE_RECENT = 'RECEIVE_RECENT';
export function receiveRecent(list){
    return {
        type: RECEIVE_RECENT,
        list
    };
}

/*
 Active
 */

export const REQUEST_ACTIVE = 'REQUEST_ACTIVE';
export function requestActive(){
    return {
        type: REQUEST_ACTIVE,
    };
}

export const RECEIVE_ACTIVE = 'RECEIVE_ACTIVE';
export function receiveActive(list){
    return {
        type: RECEIVE_ACTIVE,
        list
    };
}

/*
 Tranche
 */
export const SELECT_TRANCHE = 'SELECT_TRANCHE';
export function selectTranche(item){
    return {
        type: SELECT_TRANCHE,
        item
    };
}
