const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'IS_PLAYING':
      return !!action.payload;
    default:
      return state;
  }
};