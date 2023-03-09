import { createContext, useState, useContext} from "react";

export const UserContext = createContext();

export function UserContextProvider(props){

    const [loginState, setLoginState] = useState(false)

    const valor = {loginState, setLoginState};

return(
    <UserContext.Provider value={valor}>
        {props.children}
    </UserContext.Provider>
)

}