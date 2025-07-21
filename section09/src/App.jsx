
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
import Exam from './components/Exam'

import {useState,useRef} from 'react'

  const mockData= [
    { 
      id : 0,
      isDone: false,
      content : "React 공부하기",
      date : new Date().getTime(),
    },
    { 
      id : 1,
      isDone: false,
      content : "빨래",
      date : new Date().getTime(),
    },
    { 
      id : 2,
      isDone: false,
      content : "노래",
      date : new Date().getTime(),
    }
  ]
function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone: false,
      content: content,
      date : new Date().getTime()
    }

    setTodos([newTodo,...todos]);
  }

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo)=> todo.id===targetId ? {...todo,isDone: !todo.isDone} : todo)
    )
  }

  return (
    <div className='App'>
      <Exam /> 
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} /> */}

    </div >
  )
}

export default App
