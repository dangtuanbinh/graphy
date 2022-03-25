import {connector} from "../../config/connector"
 
export const client_id = "8f9fbd10d8bb0a7e69dd531aea77d5a0b84152b806286ed7f83f896c1987413b"

export const getImageList = (queryParams) => {
    return (dispatch) => {
        connector({
            url: `https://api.unsplash.com/photos/?client_id=${client_id}&${queryParams}`,
            method: "GET",
            data: null,
        }).then((res) => {
                dispatch({
                    type: "GET_IMAGE_LIST",
                    payload:res.data,
                })
        }).catch((err) => {
            console.log(err)
        });
    }
}

export const searchImageList = (queryParams) => {
    return (dispatch) => {
        connector({
            url: `https://api.unsplash.com/search/photos/?client_id=${client_id}&${queryParams}`,
            method: "GET",
            data: null,
        }).then((res) => {
                dispatch({
                    type: "SEARCH_IMAGE_LIST",
                    payload: res.data
                })
        }).catch((err) => {
            console.log(err)
        });
    }
}


