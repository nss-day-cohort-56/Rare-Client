import { saveNewComment } from "../../managers/CommentManager"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const CommentForm = () => {
  const { postId } = useParams()
  const navigate = useNavigate()

  const [comment, setComment] = useState({
    post_id: postId,
    content: ""
  })

  const handleSave = (event) => {
    event.preventDefault()
    saveNewComment(comment)
    navigate(`/posts/${postId}/comments`)
  }

  const handleUpdate = (evt) => {
    const copy = { ...comment }
    copy[evt.target.name] = evt.target.value
    setComment(copy)
    // navigate(`/posts/${postId}/comments/`)
  }

  return (

    <section className="section">
      <div className="card">
        <div className="card-content">
          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <input className="input" required autoFocus
                name="subject"
                type="text"
                value={comment.subject}
                onChange={handleUpdate } />
            </div>
            <label className="label">Comment</label>
            <input className="input" required 
                name="content"
                type="text"
                value={comment.content}
                onChange={handleUpdate } />
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                onClick={handleSave}
                className="button is-success">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
