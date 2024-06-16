import {createSlice} from '@reduxjs/toolkit'



 const Favourite = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        favouriting(state,action){
            const { id } = action.payload;
            const index = state.findIndex(item => item.id === id);
            if (index === -1) {
              state.push(action.payload);
            } else {
              state.splice(index, 1);
            }
        },
      
     

    }

})

export  const {favouriting} = Favourite.actions;

export default Favourite.reducer;