import React from "react";
import { Card } from "./card";

export const CardList = ({ robots  }) => {
    
    const cards = robots.map((robot) => {
        return (
            <Card 
                key = {robot.id}
                id = {robot.id}
                name = {robot.name}
                username = {robot.username}
                email = {robot.email}
            />
        )
    })
    
    return(
        <div>
            {cards}
        </div>
    )
}