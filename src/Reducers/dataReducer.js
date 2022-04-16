const dataReducer = (state, action) =>{
    switch(action.type){
        
     case "GET_DATA" : return {...state}

     case "LOAD_DATA" : {
        if(action.payload.productList){ return {...state, isLoading: action.payload.isLoading, data:[...action.payload.productList]}}
        if(action.payload.categories){ return {...state, isLoading: action.payload.isLoading, categories : action.payload.categories}}
     }

     case "HIGH_TO_LOW" : return{ ...state, sortFrom : action.type}

     case "LOW_TO_HIGH" : return{ ...state, sortFrom : action.type}

     case "EXCLUDE_OUT_OF_STOCK" : {
         if(state.excludeOutOfStock === "EXCLUDE_OUT_OF_STOCK"){
            return {...state, excludeOutOfStock : ""}
         }else{
        return {...state, excludeOutOfStock : action.type}
         }
        }

    case "PRICING" :  return {...state, pricing : action.payload}

    case "SORT_BY_CATEGORIES" :  return {...state, selectedCategories : [...action.payload] }

    case "RATING" : return {...state, rating : action.payload} 

    case "SEARCH" : return {...state, searchFor : action.payload}

   case "CLEAR"   : return {...state, 
                              sortFrom : "",
                              excludeOutOfStock: "",
                              pricing : "",
                              selectedCategories : [],
                              rating : 5,
                              searchFor : ""
                           }

    default : return state
 }
}

export {dataReducer}