const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STORY':
      return action.payload;
    default:
      return state;
  }
};