import {BASE_URL, config} from './services'
import { Link, Routes, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Nav from './components/Nav/Nav'
import Detail from './components/Details/Details'
import Homepage from './components/Homepage/Homepage'


function App() {
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
      <Nav/>

    <Routes>
      
      <Route path='/' element={<Homepage games={games}/>}/>

      <Route path={'/details/:id'} element={<Detail games={games}/>}/>
      </Routes>
   

    </div>
  
  )

  }
export default App;

