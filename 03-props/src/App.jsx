import React from 'react'
import Card from "./components/Card"

const App = () => {
  return (
    <div className='parent'>
      <Card user="Akshat" age={20} />
      <Card user="Aksh" age={21} />
      <Card user="Ak" age={22} />
      <Card user="shat" age={23} />
    </div>
  )
}

export default App
