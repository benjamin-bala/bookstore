
const reducer = (state = [], action) => {
    switch (action.type) {
        case "addToCart":
            console.log(state);
            let { _id } = action.payload.book
            let alreadyInCart = false

            state.forEach(item => {
                if(item._id === _id){
                    alreadyInCart = true
                }
            })

            if(!alreadyInCart){
                return [...state, action.payload.book]
            } else {
                return state
            }
        
        case "deleteItem":
            let bookId = action.payload
            console.log(action.payload);
            state = state.filter(item => {
                return item._id !== bookId
            })
            return state
        default:
            return state
    }
}

export default  reducer