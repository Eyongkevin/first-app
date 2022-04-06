import { useState, useEffect } from 'react'
import axios from 'axios'

type TIssue = {
  number: number
  title: string
  state: string
}

function Issues() {
  const [issues, setIssues] = useState<TIssue[]>([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    axios.get('https://api.github.com/repos/ContentPI/ContentPI/issues').then((response: any) => {
      setIssues(response.data)
    })
  }, []) // componentDidMount

  return (
    <>
      <h1>ContentPI Issues</h1>

      {issues.map((issue: TIssue) => (
        <p key={issue.title}>
          <strong>#{issue.number}</strong>{' '}
          <a
            href={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`}
            target="_blank"
            rel="noreferrer"
          >
            {issue.title}
          </a>{' '}
          {issue.state}
        </p>
      ))}
    </>
  )
}
export default Issues
