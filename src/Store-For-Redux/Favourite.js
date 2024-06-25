import {createSlice} from '@reduxjs/toolkit'



 const Favourite = createSlice({
    name:"favourite",
    initialState:[],
    reducers:{
        favouriting(state,action){
          let find = state.findIndex(item=>item.id===action.payload.id)
            if (find === -1) {
              state.push(action.payload);
            } else {
              state.splice(find, 1);
            }
        },
      
     

    }

})

export  const {favouriting} = Favourite.actions;

export default Favourite.reducer;