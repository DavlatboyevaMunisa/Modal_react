import React from 'react'

export default function Modal() {
  return (
    <div className='modal'>
        <form action="#">
            <label htmlFor="#">
                Name
                <input type="text" />
            </label>
            <label htmlFor="#">
                Password
                <input type="text" />
            </label>
        </form>
    </div>
  )
}
