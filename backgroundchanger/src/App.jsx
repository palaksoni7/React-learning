import { useState } from 'react'


function App() {
  const [color,setcolor] = useState("blue")

  return (

    <div className="w-full h-screen duration-200" style={{background: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button className=" outline-none px-4 bg-red-500 text-white rounded-2xl" onClick={() => setcolor("red")}>Red</button>
          <button className=" outline-none px-4 bg-blue-500 text-white rounded-2xl" onClick={() => setcolor("blue")}>Blue</button>
          <button className=" outline-none px-4 bg-green-500 text-white rounded-2xl" onClick={() => setcolor("green")}>Green</button>
          <button className=" outline-none px-4 bg-yellow-500 text-black rounded-2xl" onClick={() => setcolor("yellow")}>Yellow</button>
          <button className=" outline-none px-4 bg-purple-500 text-white  rounded-2xl" onClick={() => setcolor("purple")}>Purple</button>
          <button className=" outline-none px-4 bg-pink-500 text-white  rounded-2xl" onClick={() => setcolor("pink")}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
