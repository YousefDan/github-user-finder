import { useReducer } from "react";
import AlertContext from "./alertContext";

//Reducer Function
const alertReducer = (state, action) =>{
    if(action.type === "SET_ALERT"){
        return action.payload
    }
    if(action.type === "REMOVE_ALERT"){
        return null
    }
}

const AlertProvider = (props) => {

 const [state , dispatch] = useReducer(alertReducer,null);
    
     //Alert Handler
  const setAlert = (message, type) => {
    dispatch({
        type: "SET_ALERT",
        payload: {message, type}
    })
    setTimeout(() => dispatch({type: "REMOVE_ALERT"}), 4000);
  };

    return ( <AlertContext.Provider value={{
        alert: state,
        setAlert,
    }}>
        {props.children}
    </AlertContext.Provider> );
}
 
export default AlertProvider;