import { createContext, useContext, useReducer } from "react";

const Filtercontext = createContext();

const initialstate ={
    filter:"ALL"
}

const reducer=(state, action)=>{
    switch(action.type){
                case "SET_FILTER":
            return{
                filter: action.payload
            }
         default:
        return state; 
    }
}

export const Filterprovider =({children})=>{
const[state, dispatch]=useReducer (reducer, initialstate)
return(
    <Filtercontext.Provider value={{state, dispatch}}>
        {children}
    </Filtercontext.Provider>
)
}
export const useFilter = () => useContext(Filtercontext);