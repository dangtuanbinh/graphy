const initialState = {
  imageList: [],
  searchList: [],
  singleImage: null
};

const imageReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_IMAGE_LIST": {
      return { ...state, imageList: actions.payload };
    }
    case "SEARCH_IMAGE_LIST": {
      return { ...state, searchList: actions.payload.results };
    }
    case "GET_SINGLE_IMAGE": {
      return {...state, singleImage: actions.payload}
    }
    default:
      return state;
  }
};

export default imageReducer;
