export const addCartItem = (book) => {
    return dispatch => {
        dispatch({
            type: "addToCart",
            payload: {book}
        })
    }
}
