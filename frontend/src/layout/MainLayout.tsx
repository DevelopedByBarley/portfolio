import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Welcome from "../pages/Welcome";
import { useCheat } from "../hooks/useCheat";
import { useState } from "react";
import CheatModal from "../components/CheatModal";

const MainLayout = () => {

  const [cheat, setCheat] = useState('');
  const [showPassedModal, setShowPassedModal] = useState(false);
  useCheat({ cheat, setCheat, showPassedModal, setShowPassedModal })

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main>
        {showPassedModal && <CheatModal setShowPassedModal={setShowPassedModal} />}
        <Welcome />
        <Outlet />
      </main>





    </>
  )
}

export default MainLayout