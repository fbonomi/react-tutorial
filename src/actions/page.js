export const SET_PAGE = 'SET_PAGE';

export function setPage(menuItem, title) {
    return {
        type: SET_PAGE,
        menuItem,
        title
    };
}