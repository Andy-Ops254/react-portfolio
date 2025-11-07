import React from 'react'
import Navbar from './Navbar'
function App() {
  return (
    <main>
      {/* Gradient photo */}
      <img className='absolute top-0 right-0 -z-10 opacity-60
      'src='/gradient.png' alt='gradient'/>

      {/* Blur effect */}
      <div className='h-0 w-160 absolute top-[20%]
      right-[-5%] shadow-[0_0_900px_20px_#e99b63] rotate-[-30deg] -z-10'></div>
    </main>
  )
}

export default App