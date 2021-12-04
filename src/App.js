import { Link, Routes, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Details from './components/Details/Details'




function App() {
  const BASE = 'appAgSGw5HszDn6qS'
  const KEY = 'keyWmknf9pWUNboUu'
  const BASE_URL = `https://api.airtable.com/v0/${BASE}/shopazon`
  const config = {
    headers: {
      Authorization: `Bearer ${KEY}`
    }
  }
const [games, setGames] = useState([])

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get(BASE_URL, config)
      setGames(response.data.records)
    }
    getGames()
  }, [])
 
  
  
  
  return (
    <div> 
      <Link to='/'>Home</Link>

    <Routes>
      
      <Route path='/' element={  
      <div>
      {games.map(vg => (
        
        <Link to={`/details/${vg.id}`}><img style={{width: "300px"  }} src={vg.fields.image}/></Link>
        
      ))}
      </div>}/>

      <Route path={'/details/:id'} element={<Details games={games}/>}/>
      </Routes>
   

    </div>
  
  )

  }
export default App;

