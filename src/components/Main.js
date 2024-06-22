import React, {useState} from "react";
import { memesdata } from "../memesdata";



export default function Main () {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/22bdq6.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesdata)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        const url = memesArray[randomNumber].url
        
        setMeme(prevState => ({
            ...prevState, randomImage: url
        }))
        console.log(setMeme)
    }

    return (
        <main className="main">
            <div className="form">

                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input" 
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input" 
                />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
                <img className="meme-image" src={meme.randomImage} />
            </div>
        </main>
    )
}