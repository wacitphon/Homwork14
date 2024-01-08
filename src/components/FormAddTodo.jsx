import { useState } from "react"

function FormAddTodo(props) {
  const {hdlAdd} = props
  const [input,setInput] = useState('')

  const hdlSubmit = (e) => {
    e.preventDefault()
    let newJob = { todo: input,completed: false,user:1}
    hdlAdd(newJob)
  }
  return (
    <form className="form-add-todo" onSubmit={hdlSubmit}>
      <input value={input} onChange={e=>setInput(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}

export default FormAddTodo