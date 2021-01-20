export function updateObject(state, updated) {
    console.log(updated);
    return {
        ...state,
        ...updated
    };
}