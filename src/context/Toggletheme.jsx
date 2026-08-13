import { Children, createContext, useContext, useEffect, useReducer } from "react";
const Toggletheme = createContext();

const initialstate={
 darkmode: JSON.parse(localStorage.getItem("darkmode")) || false,
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
useEffect(() => {
  localStorage.setItem("darkmode", JSON.stringify(state.darkmode));
}, [state.darkmode]);

return(
    <Toggletheme.Provider value={{state, dispatch}}>
        {children}
    </Toggletheme.Provider>
)
}
export const usetheme =() => useContext(Toggletheme)