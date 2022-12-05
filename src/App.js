import './App.css';
import { React, useState, useEffect } from 'react';


function App() {
  const [title, setTitle] = useState("")
  const [mail, setMail] = useState("")
  const [artir, setArtir] = useState(0)

  useEffect(()=>{
    
  })

  const handleSumbit = () => {
    console.log(title)
    console.log(mail)
  }

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleMail = (event) => {
    setMail(event.target.value)
  }


  const sayiArtir = () => {
    setArtir(artir + 1)
  }
  const sayiAzalt = () => {
    setArtir(artir - 1)
  }


  return (
    <div className="App">
      <form onSubmit={handleSumbit}>
        <div>
          <label>Username:</label>
          <input type='text' value={title} onChange={handleTitle}></input>
          <label>Mail:</label>
          <input type='text' value={mail} onChange={handleMail}></input>
        </div>
    
        <button type='sumbit'>send</button>
      </form>



      <div>{artir}</div>
      <button onClick={sayiArtir}>Artir</button>
      <button onClick={sayiAzalt}>Azalt</button>
    </div>
  );
}

export default App;
