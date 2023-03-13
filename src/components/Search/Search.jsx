import React, { useState, useEffect } from 'react'
import {products} from "../../data/products";
import {recomendedBooks} from "../../data/products";
import { ProductItem } from '../ProductsList/ProductItem';

export const Search = () => {

    const [formSearch, setFormSearch] = useState("")

    const books = [...products, ...recomendedBooks]

    const [searchedBook, setSearchedBook] = useState([])


    const handleSearch = (e) => {
        setFormSearch(e.target.value)
        setSearchedBook([])
    }
    
    useEffect(() => {
        books.map((book)=>{
            if(book.name.toUpperCase().includes(formSearch.toUpperCase()) || book.autor.toUpperCase().includes(formSearch.toUpperCase()) ){
                setSearchedBook([...searchedBook,book])
            }
        })
        if(formSearch.length === 0){
            setSearchedBook([])
        }
    }, [formSearch])
    
    
    // console.log(searchedBook);

  return (
    <div>
        <form >
            <input type="text" value={formSearch} onChange={handleSearch}/>

        </form>
        <div>
            {searchedBook.map((bookSelected)=>{
                return(
                    <ProductItem key={searchedBook.id} item={bookSelected}/>
                )
            })}
        </div>
    </div>
  )
}
