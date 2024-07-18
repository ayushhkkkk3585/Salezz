import { useState } from 'react'

import './App.css'
import Datas from './components/Datas'

import Component6 from './components/Component6'
import Component2 from './components/Component2'
import Component1 from './components/Component1'
import Corecompo from './components/Corecompo'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Datas/> */}
    {/* <RangeSlider /> */}
    {/* <Club/> */}
    {/* <Component6/> */}
    {/* <Component2/> */}
    {/* <Component1/> */}
    <Corecompo/>
    
    


      
    </>
  )
}

export default App
