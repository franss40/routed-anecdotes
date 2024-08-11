import { useNavigate } from "react-router-dom"
import { useField } from "../hooks"

const CreateNew = ({ addNew, notification }) => {
  const [onResetContent, content] = useField('text')
  const [onResetAuthor, author] = useField('text')
  const [onResetInfo, info] = useField('text')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    })
    notification(content.value)
    navigate('/')
  }

  const reset = () => {
    onResetContent()
    onResetAuthor()
    onResetInfo()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button type="submit">create</button>
        <button type="reset" onClick={reset}>reset</button>
      </form>
    </div>
  )
}

export default CreateNew