import './App.css'
import React, {useState} from 'react'
import General from './components/General'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Pumpkin Miamba",
    email: "wopwop@hotmail.com",
    phone: "+265 997 288 584"
  })

  const handleGeneralInfo = (name, email, phone) => {
    setGeneralInfo({name, email, phone});
  }
  return (
    <main>
      <General generalInfo={generalInfo} handler={handleGeneralInfo}/>
    </main>
  )
}

export default App
