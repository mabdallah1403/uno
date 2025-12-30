import { useState } from 'react'
const cardImages = import.meta.glob<{ default: string }>('../assets/Cards/Generated_Cards/*.png', { eager: true });

import '../Front End Cards/Cards_in_Hand.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={cardImages['../assets/Cards/Generated_Cards/Blue_2.png'].default} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={cardImages['../assets/Cards/Generated_Cards/Blue_Reverse.png'].default} alt="React logo" />
        </a>
      </div>
      <h1>Card Images Displayed!</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
        } 
        }>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
