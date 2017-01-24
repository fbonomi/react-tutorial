export const REQUEST_RECENT = 'REQUEST_RECENT';
export const RECEIVE_RECENT = 'RECEIVE_RECENT';

export function requestRecent() {
    return {
        type: REQUEST_RECENT,
    };
}

export function receiveRecent(list) {
    return {
        type: RECEIVE_RECENT,
        list
    };
}