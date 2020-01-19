const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return action.payload || 'Hello world';
    default:
      return state;
  }
};
