import { createContext, useState } from "react";
import { products } from "../data/products";

export const DataContext = createContext();

export function DataContextProvider(props){

    const objProducts = {};

    products.map((x)=>{
        objProducts[x.name]= {
            "price" : `${x.price}`,
            "quantity" : 0
        }
    })


    const [contextData, setContextData]=useState(objProducts);

    const valor = {contextData, setContextData};

    // console.log(objProducts)

return(
    <DataContext.Provider value={valor}>
        {props.children}
    </DataContext.Provider>
)

}