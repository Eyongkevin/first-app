import React from 'react'

interface IPerson {
  firstName: string
  lastName: string
  age: number
  isLegal?: boolean
}

// type TPerson = {
//     firstName: string;
//     lastName: string;
//     age: number;
//     isLegal?: boolean;
// };

function Customer(props: IPerson) {
  const { firstName, lastName, age } = props
  const attrs = {
    className: 'tem',
    id: `tem-${1}` // template literals
  }

  return (
    <div {...attrs}>
      {' '}
      {/* spread attribute operator */}
      <h1> Hello React</h1>
      <p>
        My names are {firstName} {lastName} and I am {age} years old
      </p>
    </div>
  )
}

export default Customer
