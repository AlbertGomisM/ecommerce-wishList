import {recomendedBooks} from "../../data/products";
import { ProductItem } from "../ProductsList/ProductItem.jsx";
import "./recomBooks.css";

export const RecomBooks = () => {
   
    return (
      <div className="divGeneralRecomBooks">
        <h2>Books only for you!</h2>
        <div className="recomeBooks">
          {recomendedBooks.map((x)=>{ 
              return(
                  <ProductItem item={x}/>
                )
            })}    
      </div>
        </div>
    )
  }
  