import { FC, useEffect, memo } from 'react'

interface IProps {
  id: number
  task: string
}

const Task: FC<IProps> = ({ task, id }) => {
  useEffect(() => {
    console.log('Rendering <Task />', task, id)
  })

  return <li>{task}</li>
}

export default memo(Task)
