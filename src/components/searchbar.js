import  React  from "react";

export const SearchBar = ({searchChange}) => {
    return(
        <div className="pa2">
            <input 
                aria-label = "Search Box"
                className='pa2 ba ba--green bg-lightest-blue' 
                type="search" 
                placeholder="robot name"
                onChange = {searchChange}/>
                
        </div>
    )
}