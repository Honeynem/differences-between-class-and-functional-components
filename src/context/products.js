import { createContext } from "react";
const productContext = createContext({
    //doing this is optional and just being done to make sure what kind of properties we need to pass to context as state like what kind of formats they should have
    products : [],
    onDelete : ()=>{},
    onIncrement : ()=>{},
    onDecrement : ()=>{},
    onReset : ()=>{}
})
export default productContext;