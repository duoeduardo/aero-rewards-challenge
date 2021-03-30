import React from 'react'
import { useGlobalContext } from '../context'

export const Card = ({_id, name, cost, category, img}) => {
    
    return (
        <article>
            <img src={img.url} alt={name} />
            <h4>{name}</h4>
            <h4>{cost} Coins</h4>
            <p>{category}</p>
        </article>
    )
}
