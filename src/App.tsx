import { useState, useEffect, useMemo, useCallback } from 'react'
import List, { TTodo } from './components/List'

const initialTodos = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' }
]

function App() {
  const [todoList, setTodoList] = useState<TTodo[]>(initialTodos)
  const [task, setTask] = useState<string>('')
  const [term, setTerm] = useState<string>('')

  useEffect(() => {
    console.log('Rendering <App />')
  })

  const handleCreate = () => {
    if (task.length === 0) {
      return
    }
    const newTodo = {
      id: Date.now(),
      task
    }
    setTodoList([...todoList, newTodo])
    setTask('')
  }

  const handleSearch = () => {
    setTerm(task)
  }
  // useMemo memorizes the values and doesn't trigger until the values in the list changes.
  const filteredTodoList = useMemo(
    () =>
      todoList.filter((todo: TTodo) => {
        console.log('Filtering..')
        return todo.task.toLowerCase().includes(term.toLocaleLowerCase())
      }),
    [term, todoList]
  )
  return (
    <>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <List todoList={filteredTodoList} />
    </>
  )
}

export default App
