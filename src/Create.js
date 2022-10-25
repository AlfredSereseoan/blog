import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextareaAutosize from "react-textarea-autosize"

const Create = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("alfred")
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }

    setIsPending(true)

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new article added")
      setIsPending(false)
      navigate("/")
    })
  }

  return (
    <div className="create">
      <h2>Add a new article</h2>
      <form onSubmit={handleSubmit}>
        <label>Article title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Article body</label>
        <TextareaAutosize
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></TextareaAutosize>
        <label>Article author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Alfred">Alfred</option>
          <option value="Diana">Diana</option>
          <option value="Cosmin">Cosmin</option>
        </select>

        {!isPending && <button>Add article</button>}
        {isPending && <button disabled>Adding article...</button>}
      </form>
    </div>
  )
}

export default Create
