import React from 'react'

export default function Video(props) {
  return (
    <div className='container-fluid px-5 mt-4'>
        <div className='ratio ratio-16x9' >
            <iframe className='border rounded object-fit-cover' src={props.url} title={props.text} allowFullScreen/>
        </div>
    </div>    
  )
}
