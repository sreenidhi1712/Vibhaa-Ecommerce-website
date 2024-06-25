import {createSlice} from '@reduxjs/toolkit'



 const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addtocart(state,action) {
            let find = state.findIndex(item=>item.id===action.payload.id)
            if(find>=0){
                state[find].rating.count+=1;
            
            }
            else{
                state.push(action.payload);
                
            }
               
        },
        decrement(state,action) {
            let find = state.findIndex(item=>item.id===action.payload.id)
            if(state[find].rating.count>1){
                state[find].rating.count-=1;
            }
            else {
                return state.filter(items=>items.id!==action.payload.id)
            }

        },
        increment(state,action) {
            let find = state.findIndex(item=>item.id===action.payload.id)
            state[find].rating.count+=1;
        
        },
        deleteitem(state,action){
           return state.filter(items => items.id!==action.payload.id)
        }

        
     

    }

})

export  const {addtocart,decrement,increment,deleteitem} = CartSlice.actions;

export default CartSlice.reducer;