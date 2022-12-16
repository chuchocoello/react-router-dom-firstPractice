import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {

    const [pokemon, setPokemon] = useState()
    const {name} = useParams()
   
    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [name])
    
    
  return (
    <div>
        <h1>Pokemon {name}</h1>
        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
    </div>
  )
}

export default Pokemon