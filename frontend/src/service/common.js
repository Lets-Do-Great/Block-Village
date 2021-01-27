export function updateObject(state, updated) {
  console.log("바뀌기 전");
  console.log(state);
  console.log("바뀐 후");
  console.log(updated);
  
  return {
      ...state,
      ...updated
  };
}