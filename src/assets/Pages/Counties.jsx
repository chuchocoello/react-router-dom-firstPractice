import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Countries = () => {

    const {name} = useParams()
    const [country, setCountry] = useState()

    useEffect(() => {
      const url = `https://restcountries.com/v3.1/name/${name}`
      axios.get(url)
          .then(res => setCountry(res.data[0]))
          .catch(err => console.log(err))
          
    }, [name])
  
  return (
    <div>
      <h1>{name}</h1>
      <img src={country?.flags.png} alt="" />
      
    </div>
  )
}

export default Countries