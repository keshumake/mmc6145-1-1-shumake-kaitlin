
import './App.css'

function Greeting({children}) {
  return (
    <h1>{children}</h1>
  )
}

function App() {
  return (
    <Greeting>
      Hello World!
    </Greeting>
  )
}

export default App
