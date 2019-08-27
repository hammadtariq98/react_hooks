export const  rootReducer = (state,actions) =>{
    console.log("Reducer state",state,"actions",actions)
    switch (actions.type) {
        case "LATEST_FOODS" :
            return{
                ...state,
                latestFoods:actions.payload
            };
        case "CATEGORY_FOODS" :
             return{
            ...state,
             categoryFoods:actions.payload
        };
        case "STORE_DATA":
            return{
                ...state,
                Foods:actions.payload
            };
        default : return actions.payload
    }
}
export default rootReducer;
