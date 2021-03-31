import React from 'react'
import { useGlobalContext } from '../context/context'

export const Navbar = () => {
    const { amount } = useGlobalContext()
    return (
        <div>
            <p>Navbar</p>
        </div>
    )
}
