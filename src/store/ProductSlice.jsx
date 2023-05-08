const { createSlice } = require('@reduxjs/toolkit');

     const Statuses = Object.freeze(
         {
            IDLE:'idle',
            ERROR:'error',
            LOADING:'loading',
    
         }
     );


const ProdcuttSlice = createSlice({
    name: 'Product',
    initialState:{
            data:[],
            status:Statuses.IDLE
    },

    reducers: 
    {
        setProducts(state, action) 
        {
           state.data = action.payload;
        },
        setStatus(state, action) 
        {
            state.status = action.payload;
        },
    },

});

export const { setProducts, setStatus } = ProdcuttSlice.actions;
export default ProdcuttSlice.reducer;



//thunk function

export function fetchProducts()
{

    return async function fetchProductsThunk(dispatch,getState){
        dispatch(setStatus(Statuses.LOADING));


        
        try
        {
            const data=  await fetch("https://dummyjson.com/products/")
            .then((response) => response.json())

            dispatch(setProducts(data));
            dispatch(setStatus(Statuses.IDLE));
        }
        
        catch(err)
        {
            console.log(err);
            dispatch(setStatus(Statuses.ERROR));
        }
    }
}