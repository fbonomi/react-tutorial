export const REQUEST_ACTIVE = 'REQUEST_ACTIVE';
export const RECEIVE_ACTIVE = 'RECEIVE_ACTIVE';

export function requestActive() {
    return {
        type: REQUEST_ACTIVE,
    };
}

export function receiveActive(list) {
    return {
        type: RECEIVE_ACTIVE,
        list
    };
}