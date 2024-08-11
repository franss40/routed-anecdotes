import { useState } from 'react'
import Footer from './components/Footer'
import Menu from './components/Menu'
import { initialAnecdotes } from './components/initialAnecdotes'

const App = () => {
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes)
  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const addNotification = (content) => {
    setNotification(`Se ha añadido una nota: ${content}`)
    setTimeout(() => {
      setNotification('')
    }, 5000);
  }

  return (
    <div>
      {notification && <div style={{padding: '10px', border: '1px solid red'}}>{notification}</div>}
      <h1>Software anecdotes</h1>
      <Menu anecdotes={anecdotes} addNew={addNew} notification={addNotification} />
      <Footer />
    </div>
  )
}

export default App
