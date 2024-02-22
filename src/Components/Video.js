import React from 'react'

export default function Video() {
  return (
    <div className='container-fluid px-5 mt-4'>
        <div className='ratio ratio-16x9' >
            <iframe className='border rounded object-fit-cover' src="https://www.youtube.com/embed/icrT4ruvlHk" title='Special Moments' allowFullScreen/>
        </div>
    </div>
  )
}
