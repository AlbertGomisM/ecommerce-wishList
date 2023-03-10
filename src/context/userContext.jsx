import { createContext, useState, useContext} from "react";

export const UserContext = createContext();

export function UserContextProvider(props){

    const [loginState, setLoginState] = useState(false)

    const [userName, setUserName] = useState("")

    const [error, setError] = useState(false)

    const valor = {loginState, setLoginState, userName, setUserName, error, setError};

return(
    <UserContext.Provider value={valor}>
        {props.children}
    </UserContext.Provider>
)

}