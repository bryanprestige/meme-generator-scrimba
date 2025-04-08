import { useState,useEffect } from 'react'


export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
          .then(res => res.json())
          .then( data => {
            setAllMemes(data.data.memes);
          });
      });

      console.log(allMemes)
    
    function ramdonMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newUrl = allMemes[randomNumber].url
        console.log(newUrl)
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: newUrl
        }))
    }

    function handleChange(event) {
        const {value,name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
    <main>
        <form className="meme-form">
            <div className="inputs">
                    <label htmlFor="top-text">Top Text
                        <input type="text" id="top-text" name="top-text" 
                        placeholder='Top'
                        onChange={handleChange} 
                        value={meme.topText}
                        ></input>
                    </label>
                    <label htmlFor="bottom-text">Bottom Text
                        <input type="text" id="bottom-text" name="bottom-text"
                        placeholder='Bottom'
                        onChange={handleChange}
                        value={meme.bottomText}
                        ></input>
                    </label>
            </div>
            <button type="button" onClick={ramdonMeme}>Generate Meme </button>
        </form>
        <div className="meme" >
            <img src={meme.imageUrl}></img>
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
        </div>

    </main>
    ) 
}