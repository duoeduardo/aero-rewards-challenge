const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, products: action.payload, loading: false };
  }
};

export default reducer;
