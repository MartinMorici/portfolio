import React from 'react'

const Container = (props) => {
  return (
    <div className='w-full max-w-[1240px] mx-auto px-8'>{props.children}</div>
  )
}

export default Container