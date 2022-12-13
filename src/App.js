import './App.css';
import { React, useState, useEffect } from 'react';
import Tab from './components/Tab';
import Task from './components/Task';


function App() {
  const [title, setTitle] = useState("")
  const [mail, setMail] = useState("")
  const [artir, setArtir] = useState(0)

  useEffect(() => {

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

  const todo = [
    { name: 'ahmet', price: 20 },
    { name: 'ayse', price: 10 }
  ]

  const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

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

      <ul>
        {names.map((key) => (
          <li key={key}>
              {key} {key.charAt(0).toUpperCase()}
          </li>
        ))}
      </ul>
      <div>
        {names.filter((key) => key.includes("P")).map(filted => <li>{filted}</li>)}
      </div>
      <div>
       <Tab text="yagmurlu" ></Tab>
       <Tab text="gunesli" ></Tab>
      </div>
      <Task></Task>
    </div>
  );
}

export default App;
