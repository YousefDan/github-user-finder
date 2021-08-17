import { useContext } from "react";
import {AiFillInfoCircle} from "react-icons/ai";
import AlertContext from "../../store/alertContext";

const Alert = () => {
  const {alert} = useContext(AlertContext)
    return ( alert && <div className={`container my-2 alert p-1 text-white bg-${alert.type}`}>
    <AiFillInfoCircle /> {alert.message}
  </div> );
}
 
export default Alert;