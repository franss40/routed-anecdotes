const Anecdote = ({anecdote}) => {
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>Author: {anecdote.author}</p>
      <p>
        Info: <a href={anecdote.info}>{anecdote.info}</a>
      </p>
      <p>Votes: {anecdote.votes}</p>
      <p>id: {anecdote.id}</p>
    </div>
  )
}

export default Anecdote