import React from 'react'

export default function Navbar({setModal,modal}) {
  return (
    <div className='navbar'>
        <ul className='list'>
            <li>Home</li>
            <li>About</li>
            <button onClick={() => setModal(!modal)}>
                <li>
                    {modal ? "Close" : "Sing up"}
                </li>
            </button>
        </ul>
    </div>
  )
}
