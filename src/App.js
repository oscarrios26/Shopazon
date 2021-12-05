import { useState, useEffect} from 'react'
import {BASE_URL, config} from './services'
import { Routes, Route } from 'react-router-dom'
import {postGame} from './services'
import axios from 'axios'
import Detail from './components/Details/Details'
import Homepage from './components/Homepage/Homepage'
import Nav from './components/Nav/Nav'
import Form from './components/Form.jsx'
import Footer from './components/Footer/Footer'
import Myinfo from './components/Footer/Myinfo'
import Cart from './components/Cart/Cart'



function App(props) {
  
  const [cartPage, setCartPage]= useState({})
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [games, setGames] = useState([])
  const [toggle, setToggle] = useState(false)

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
    <><div>
    <Nav />
    <Footer />


    <Routes>
      <Route path={'/'} element={<Homepage games={games} />} />
      <Route path={'/details/:id'} element={<Detail games={games} />} />
    <Route path={'/new'} element={<Form text={text} setText={setText} setImage={setImage} image={image}  price={price} setPrice={setPrice} title={title} setTitle={setTitle} handleSubmit={handleSubmit}/>}/>
      <Route path={'/About'} element={<Myinfo />} />
      <Route path={'/cart'} element={<Cart />} />
    </Routes>
  </div><><div>

  </div><><div>
    
  </div>
      </></></>
)}
  
export default App;

