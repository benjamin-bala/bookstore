export const addCartItem = (book) => {
    return dispatch => {
        dispatch({
            type: "addToCart",
            payload: {book}
        })
    }
}

export const deleteItem = (bookId) => {
    return dispatch => {
        dispatch({
            type: "deleteItem",
            payload: bookId
        })
    }
}
