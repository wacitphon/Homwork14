import { useEffect, useState } from "react"
// import axios from 'axios'
import Dashboard from "./Dashboard"
import FormAddTodo from "./FormAddTodo"
import TodoContainer from "./TodoContainer"

function TodoApp() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [trigger,setTrigger] = useState(false)
  const apiUrl = 'https://api-v1-yerg.onrender.com/todos'

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then(res => res.json())
      .then(dat => {
        console.log(dat);
        setData(dat);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [trigger]);
    // axios.get(apiUrl).then(res=>{
    //     console.log(res)
    //     setData(res.data)
    //     setIsLoading(false)
    // })


  const hdlAdd = (newJob) =>{
     fetch(apiUrl, {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob)
     }).then(res => res.json())
     .then(rs =>{
        console.log(rs)
        // setData([...data,{id:rs.id,...newJob}])
        setTrigger(prv => !prv)
     })
  }
  const handleDelete = (id) => {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTrigger(prev => !prev);
    });
  };

  const handleUpdate = (id, updatedText, completed) => {
    const updatedData = {
      todo: updatedText,
      completed: completed,
    };
  
    fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((updatedTodo) => {
        console.log(updatedTodo);
        setTrigger((prev) => !prev);
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  if (isLoading) {
    return ( <h1>Loading...</h1> )
  }

  return (
    <div className="todo-app">
      <Dashboard task={data.length}/>
      <FormAddTodo hdlAdd={hdlAdd} />
      <TodoContainer todos={data} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  )
}

export default TodoApp