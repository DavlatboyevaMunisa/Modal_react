import { useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Modal from './components/Modal';
import Navbar from './components/Navbar';

function App() {

  const [loading, setLoading] = useState(true);
  const [modal,setModal] = useState(false);

  if (loading) {
    return (
      <Loading />
    )
  }



  return (
    <>
    <Navbar setModal={setModal} modal={modal} />
    {modal && <Modal />}
    </>
  )
}

export default App
