import { useState, useEffect } from 'react'
import {BASE_URL, config} from './services'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Detail from './components/Details/Details'
import Homepage from './components/Homepage/Homepage'
import Nav from './components/Nav/Nav'
import Form from './components/Form.jsx'
import Footer from './components/Footer/Footer'
import Myinfo from './components/Footer/Myinfo'

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
      <Footer/>
      
    
      <Routes>
        <Route path={'/'} element={<Homepage games={games} />} />
        <Route path={'/details/:id'} element={<Detail games={games} />} />
        <Route path={'/new'} element={<Form />}/>
        <Route path={'/About'} element={<Myinfo/>}/>
        </Routes>
      </div>
)}
  
export default App;

