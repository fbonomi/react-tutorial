export const SELECT_TRANCHE = 'SELECT_TRANCHE';

export function selectTranche(item){
    return {
        type: SELECT_TRANCHE,
        item
    };
}