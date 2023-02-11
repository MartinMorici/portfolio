import React from 'react'

const Container = (props) => {
  return (
    <div className='w-full max-w-[1400px] mx-auto px-8'>{props.children}</div>
  )
}

export default Container