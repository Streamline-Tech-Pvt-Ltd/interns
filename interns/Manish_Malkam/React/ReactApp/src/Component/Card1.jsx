import React from 'react'

const Card1 = ({name,children}) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <h1>Hello {name}</h1>
      {children}
    </div>
  )
}

export default Card1