
const reducer = (state = [], action) => {
    switch (action.type) {
        case "addToCart":
            console.log(state);
            let {_id, quantity} = action.payload.book
            let alreadyInCart = false, newQty = 0

            state.forEach(item => {
                if(item._id === _id){
                    alreadyInCart = true
                    newQty = parseInt(item.quantity + quantity)
                }
            })

            if(!alreadyInCart){
                return [...state, action.payload.book]
            } else {
                return [...state, {...action.payload.book, quantity: newQty}]
            }
          
        default:
            return state
    }
}

export default  reducer