export const REQUEST_LIST = 'REQUEST_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';

export function requestList(section) {
    return {
        type: REQUEST_LIST,
        section
    };
}

export function receiveList(section, list) {
    return {
        type: RECEIVE_LIST,
        section,
        list
    };
}