import React from 'react'

const HeadSection = ({icon,title,className}) => {
  return (
      <div className={`head__section ${className}`}>
          <span>{icon}</span>
          <h2>{title}</h2>
    </div>
  )
}

export default HeadSection