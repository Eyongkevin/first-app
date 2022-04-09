import { useState, useEffect, useMemo, useCallback } from 'react'
import List, { TTodo } from './components/List'
import Note from './components/Note'
import Geolocation from './components/Geolocation'

const initialTodos = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' }
]
type TChildren = {
  callBack: any
  children: JSX.Element | JSX.Element[] | string
}
const Button = ({ callBack, children }: TChildren) => <button onClick={callBack}>{children}</button>

function App() {
  const [todoList, setTodoList] = useState<TTodo[]>(initialTodos)
  const [task, setTask] = useState<string>('')
  const [term, setTerm] = useState<string>('')

  useEffect(() => {
    printTodoList()
  }, [todoList])

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
  // mostly used with callback functions that will be sent in a nested child component
  const handleDelete = useCallback(
    (taskId: number) => {
      const newTodoList = todoList.filter((todo: TTodo) => todo.id !== taskId)
      setTodoList(newTodoList)
    },
    [todoList]
  )

  // Used when we want to manipulating the state in a function passed as argument to the useEffect
  const printTodoList = useCallback(() => {
    console.log('Changing todoList: ', todoList)
  }, todoList)

  const handleSearch = () => {
    setTerm(task)
  }
  // useMemo memorizes the values and doesn't trigger until the values in the list changes.
  const filteredTodoList = useMemo(
    () =>
      todoList.filter((todo: TTodo) => {
        // console.log('Filtering..')
        return todo.task.toLowerCase().includes(term.toLocaleLowerCase())
      }),
    [term, todoList]
  )

  return (
    <>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
      <Button callBack={handleSearch}>Search</Button>
      <List todoList={filteredTodoList} handleDelete={handleDelete} />
      <Note />
    </>
  )
}

export default App
