const initialState = {
  count: 0
};

// reducer
export default (state = initialState, action) => {
  console.log('called reducer');
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
