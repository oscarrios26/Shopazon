import {useEffect, useState} from 'react'
import {postGame} from './services'
import {Routes, Route} from 'react-router-dom'
import {BASE_URL, config} from './services'
import axios from 'axios'
import Detail from './components/Details/Details'
import Homepage from './components/Homepage/Homepage'
import Nav from './components/Nav/Nav'





function App() {
  const [games, setGames] = useState([])
    const [image, setImage] = useState("");
    const [text, setText] = useState("");
    const [price, setPrice] = useState("");
    const [title, setTitle] = useState("");
    const [toggle, setToggle]= useState(false)
    
    
      
    useEffect(() => {
        const getGames = async () => {
          const response = await axios.get(BASE_URL, config)
          setGames(response.data.records)
        }
        getGames()
       
        
      }, [toggle])
     
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const newGames = {
            title,
            image,
            text,
            price,
            
        } ;
       
        const responce = await postGame(newGames);
        setToggle((prevToggle) => !prevToggle)
    
        
        setImage('')
        setText('')
        setTitle('')
        setPrice('')
        }


return (
    <div>
      <Nav/>
    
      <Routes>
        <Route path={'/'} element={<Homepage games={games} />} />
        <Route path={'/details/:id'} element={<Detail games={games} />} />
       
        <Route path={'/new'} element={
          <div>
      <form onSubmit={handleSubmit}>
        <h4>Chirp to us!</h4>
        <label>Description:</label>
        <input className="test"
          value={text}
          onChange={(e) => setText(e.target.value)} />
        <label>Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <label>Price:</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)} />
        <label>Image URL:</label>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Submit!</button>
      </form>
      </div>

    }/>

        
      </Routes>
      </div>
)}
  
export default App;

