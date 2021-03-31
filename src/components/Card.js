import React from 'react'
import { useGlobalContext } from '../context/context'

export const Card = ({_id, name, cost, category, img}) => {
    const {  } = useGlobalContext()
    return (
        <article>
            <img src={img.url} alt={name} />
            <h4>{name}</h4>
            <h4>{cost} Coins</h4>
            <p>{category}</p>
        </article>
    )
}
