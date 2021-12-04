import {BASE_URL, config} from './services'
import axios from "axios";
import { useState, useEffect } from "react"


export default function Form() {
    const [post, setPost] = useState([]);
    const [image, setImage] = useState("");
    const [text, setText] = useState("");
    const [price, setPrice] = useState("");
    const [title, setTitle] = useState("");

    useEffect (() => {
        const makeApiCall = async () => {
        const resp = await axios.get(BASE_URL, config)
        setPost(resp.data)
       
    }
    makeApiCall()
}, []);


const handleSubmit = async (e) => {
    e.preventDefault();
    const newGames = {
        title,
        image,
        text,
        price,
    };
    await axios.post(BASE_URL, config, newGames);
}


    


    return (
        <div>
            
        </div>
    )
}
