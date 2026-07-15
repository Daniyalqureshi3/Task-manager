import { Children, createContext, useContext, useReducer } from "react";


const Toggletheme = createContext();

const initialstate={
 darkmode:true,
}

const reducer=(state, action)=>{
     switch(action.type){
        case "TOGGLE_MODE":
            return{
                ...state, darkmode: !state.darkmode
            }
        default:
          return  state    
     }
}
export const Toggleprovider=({children}) => {
const [state, dispatch] = useReducer(reducer, initialstate)
return(
    <Toggletheme.Provider value={{state, dispatch}}>
        {children}
    </Toggletheme.Provider>
)
}
export const usetheme =() => useContext(Toggletheme)