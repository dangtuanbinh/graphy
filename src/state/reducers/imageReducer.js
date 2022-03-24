const initialState = {
    imageList: [],
  };
  
  const imageReducer = (state = initialState, actions) => {
    switch (actions.type) {
      case "GET_IMAGE_LIST": {
        state.imageList = actions.payload;
        return { ...state };
      }
      default:
        return state;
    }
  };
  
  export default imageReducer;