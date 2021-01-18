export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount,0);


const reducer = (state, action ) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            };
            
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0 ){
                newBasket.splice(index, 1);
            }else{
                console.warn(`Cann't remove product (id: ${action.id} as its not in basket!)`)
            }

            return {
                ...state, 
                basket: newBasket
            }
            // it doesn't work because same product will be selected many times and all selected product will remove
            // return{
            //     ...state,
            //     basket: state.basket.filter(item => item.id !== action.id)
            // }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};


export default reducer;
