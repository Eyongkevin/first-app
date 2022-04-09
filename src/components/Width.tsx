import React, { useEffect, useState } from 'react'

// HOC = Higher Order Component
const withInnerWidth = (Component: any) => (props: any) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setInnerWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      // This emulates the componentWillUnmount
      window.removeEventListener('resize', handleResize)
    }
  }, []) // This emulates the componentDidMount
  return <Component {...props} innerWidth={innerWidth} />
}

const MyComponent = ({ innerWidth }: { innerWidth: number }) => {
  return <span>window.innerWidth, {innerWidth}</span>
}

const MyComponentWithInnerWidth = withInnerWidth(MyComponent)

export default MyComponentWithInnerWidth
