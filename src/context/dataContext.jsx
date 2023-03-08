import { createContext, useState, useContext} from "react";

export const DataContext = createContext();

export function DataContextProvider(props){

    const [selectedBook, setSelectedBook] = useState([]);

    const [total, setTotal] = useState(0)

    const valor = {selectedBook, setSelectedBook, total, setTotal};

return(
    <DataContext.Provider value={valor}>
        {props.children}
    </DataContext.Provider>
)

}