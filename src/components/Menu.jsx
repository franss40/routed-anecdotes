import { Link, Route, Routes, useMatch } from "react-router-dom"
import AnecdoteList from "./AnecdoteList"
import About from "./About"
import CreateNew from "./CreateNew"
import Anecdote from "./Anecdote"

const Menu = ({anecdotes, addNew, notification}) => {
  const flexMenu = {
    display: "flex",
    gap: 20,
  }
  const match = useMatch('/anecdotes/:id')
  const anecdote = match
    ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null
  return (
    <>
      <div style={flexMenu}>
        <Link to="/">anecdotes</Link>
        <Link to="/create">create new</Link>
        <Link to="/about">about</Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={<AnecdoteList anecdotes={anecdotes} />}
        />
        <Route path="/anecdotes/:id" element={<Anecdote anecdote={anecdote} />} />
        <Route path="/create" element={<CreateNew addNew={addNew} notification={notification} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default Menu
