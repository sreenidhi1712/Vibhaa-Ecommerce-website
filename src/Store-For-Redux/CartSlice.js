import {createSlice} from '@reduxjs/toolkit'



 const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addtocart(state,action) {
            let find = state.findIndex(item=>item.id===action.payload.id)
            if(find>=0){
                state[find].rating.quantity+=1;
            
            }
            else{
                state.push(action.payload);
            }
               
        },
        decrement(state,action) {
            let find = state.findIndex(item=>item.id===action.payload.id)
            if(state[find].rating.quantity>1){
                state[find].rating.quantity-=1;
            }
            else {
                return state.filter(items=>items.id!==action.payload.id)
            }

        },
        increment(state,action) {
            let find = state.findIndex(item=>item.id===action.payload.id)
            state[find].rating.quantity+=1;
        
        },

        
     

    }

})

export  const {addtocart,decrement,increment} = CartSlice.actions;

export default CartSlice.reducer;