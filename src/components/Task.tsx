import { FC, useEffect, memo } from 'react'

interface IProps {
  id: number
  task: string
  handleDelete: any
}

const Task: FC<IProps> = ({ id, task, handleDelete }) => {
  useEffect(() => {
    // console.log('Rendering <Task />', task, id)
  })

  return (
    <li>
      {task} <button onClick={() => handleDelete(id)}>X</button>
    </li>
  )
}

export default memo(Task)
