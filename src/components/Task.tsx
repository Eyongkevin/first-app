import { FC, useEffect } from 'react'

interface IProps {
  id: number
  task: string
}

const Task: FC<IProps> = ({ task, id }) => {
  useEffect(() => {
    console.log('Rendering <Task />', task, id)
  }, [])

  return <li>{task}</li>
}

export default Task
