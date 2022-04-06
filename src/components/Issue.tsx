import { Component } from 'react'
import axios from 'axios'

type TIssue = {
  number: number
  title: string
  state: string
}
type IProps = unknown
type IState = {
  issues: TIssue[]
}

class Issues extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/repos/ContentPI/ContentPI/issues').then((response: any) => {
      this.setState({
        issues: response.data
      })
    })
  }

  render() {
    const { issues = [] } = this.state

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
}
export default Issues
