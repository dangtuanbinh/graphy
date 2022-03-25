const initialState = {
  imageList: [],
  searchList: [],
};

const imageReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_IMAGE_LIST": {
      return { ...state, imageList: actions.payload };
    }
    case "SEARCH_IMAGE_LIST": {
      return { ...state, searchList: actions.payload.results };
    }
    default:
      return state;
  }
};

export default imageReducer;
