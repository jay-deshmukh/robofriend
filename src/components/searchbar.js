import  React  from "react";

export const SearchBar = ({searchfild , searchChange}) => {
    return(
        <div className="pa2">
            <input 
                className='pa2 ba ba--green bg-lightest-blue' 
                type="search" 
                placeholder="robot name"
                onChange = {searchChange}/>
        </div>
    )
}