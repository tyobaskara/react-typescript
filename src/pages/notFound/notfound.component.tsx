import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to='/'>Go Home</Link>
    </div>
  )
}

export default NotFound
