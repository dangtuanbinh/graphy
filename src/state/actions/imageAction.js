import {connector} from "../../config/connector"
 
export const getImageList = () => {
    return (dispatch) => {
        connector({
            url: "https://api.unsplash.com/photos/?client_id=8f9fbd10d8bb0a7e69dd531aea77d5a0b84152b806286ed7f83f896c1987413b",
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