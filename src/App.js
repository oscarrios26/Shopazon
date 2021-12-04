import {BASE_URL, config} from './services'
import { Link, Routes, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Details from './components/Details/Details'




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

