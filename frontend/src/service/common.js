export function updateObject(state, updated) {
    console.log("바뀌기 전 : " + state);
    console.log("바뀐 후 : " + updated);
    return {
        ...state,
        ...updated
    };
}