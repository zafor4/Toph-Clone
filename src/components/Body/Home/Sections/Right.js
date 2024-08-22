import React from 'react'
import COntests from "./COntests";

const Right = (props) => {
  return (
    <div className='tw-mb-20'>
      <COntests data={props.data}/>
    </div>
  )
}

export default Right