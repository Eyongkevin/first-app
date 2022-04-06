import { FC, useEffect, memo } from 'react'
import Task from './Task'

export type TTodo = {
  id: number
  task: string
}

interface IProps {
  todoList: TTodo[]
}

const List: FC<IProps> = ({ todoList }) => {
  useEffect(() => {
    console.log('Rendering <List />')
  })

  return (
    <ul>
      {todoList.map((todo: TTodo) => (
        <Task key={todo.id} id={todo.id} task={todo.task} />
      ))}
    </ul>
  )
}

export default memo(List)
