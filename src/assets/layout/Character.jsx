import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'


const Character = () => {

  const [character, setCharacter] = useState()
  const {id} = useParams()

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    axios.get(url)
        .then(res => setCharacter(res.data))
        .catch(err => console.log(err))

  }, [id])
  

  return (
      <div className='Character'>
          <h1 className='title'>Character #{id}</h1>
          <img src={character?.image} alt="" />
      
      </div>
  )
}

export default Character