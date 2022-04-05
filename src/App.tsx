import React, { useState, useEffect } from 'react'
import renderIf from 'render-if'
import './App.css'

import Customer from './components/Customer'

function App() {
  const [title, setTitle] = useState('Practical React Enterprise')

  // #CSSinJS
  const h1Style = {
    color: 'blue',
    marginBottom: '5rem'
  }
  const Render = true

  const showCustomerData = renderIf(Render)

  const isPalindrome = (word: string): boolean => {
    const smallCaseWord = word.toLowerCase()
    const reversedWord = smallCaseWord.split('').reverse().join('')
    return reversedWord === smallCaseWord
  }

  useEffect(() => {
    console.log('Welcome to the Practical React Enterprise!')
  }, [])
  return (
    <div className="App">
      <h1 onClick={() => setTitle('Become an Effective Developer from Day 1')} style={h1Style}>
        {title}
      </h1>
      {showCustomerData(<Customer firstName="Kevin" lastName="Enow" age={21} />)}
      <p>Is Welcome a palindrome? </p>
      {isPalindrome('Welcome') ? <span>True</span> : <span>False</span>}
    </div>
  )
}

export default App
