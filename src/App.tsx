import { useState } from 'react'
import TodoApp from './components/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return <>  <div className='App'></div>
  <TodoApp /> </>
}

export default App
