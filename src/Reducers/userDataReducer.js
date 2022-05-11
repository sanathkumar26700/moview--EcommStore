 const userDataReducer = (state, action) => {
    switch(action.type){
        case "SET_WISHLIST" : return {...state, wishListData : [...action.payload]}

        default : return {...state}
    }
}

export default userDataReducer