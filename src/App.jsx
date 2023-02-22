import { useState } from 'react'



function App() {
    
    const [count,setCount] = useState(0)


  return (
    <div className="App text-center border-2 m-4">
      <h1 className='text-6xl inline'>Counter: </h1>
      <p className='inline text-6xl'>{count}</p>
      <button className='block mx-auto border-2 px-4 mb-2 mt-12 border-black' onClick={() => {setCount(count + 1)}}>+</button>
      <button className='block mx-auto border-2 px-4 mb-2 border-black' onClick={() => {setCount(count - 1)}}>-</button>
      <button className='block mx-auto border-2 px-4 mb-2 border-black' onClick={() => {setCount(count - count)}}>Reset</button>
    </div>
  )
}

export default App
