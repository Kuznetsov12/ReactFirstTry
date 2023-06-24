import { useState } from 'react'
import { MainScreen } from '../main/MainScreen'
import { styledApp } from './AppStyled'

export function App() {
  const [count, setCount] = useState(0)

  return (   
      <div style={styledApp.appContainer}>
        <MainScreen></MainScreen>
      </div>
  )
}




