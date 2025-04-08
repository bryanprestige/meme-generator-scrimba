import TrollFace from '../assets/troll-face.png'

export default  function Header () {
    return (
        <div className='header-container'>
            <img src={TrollFace}></img>
            <header>Meme Generator</header>
        </div>
    )
}