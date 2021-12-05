import {useState} from 'react'
import {postGame} from '../services'

export default function Form(props) {
    
    const [image, setImage] = useState("");
    const [text, setText] = useState("");
    const [price, setPrice] = useState("");
    const [title, setTitle] = useState("");
   
    
    
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newGames = {
            title,
            image,
            text,
            price,

        } ;

        const responce = await postGame(newGames);
        
        


        setImage('')
        setText('')
        setTitle('')
        setPrice('')
        }




    return (
        <><div>
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
      </div>
        </>
          )
          }
        
