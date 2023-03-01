import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider(props){
    const [selectedBook, setSelectedBook] = useState([]);

    // const selectedBook = 58;

    const valor = {selectedBook, setSelectedBook};

    // const valor = selectedBook;

return(
    <DataContext.Provider value={valor}>
        {props.children}
    </DataContext.Provider>
)

}