import React from "react";

export const Card = ({name , id , username , email}) => {
    return(
        <div className="bg-light-green dib br2 pa3 ma3 grow bw-2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}
