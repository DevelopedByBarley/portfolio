import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";
import Welcome from "../pages/Welcome";

const MainLayout = () => {




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
        <Navbar />
        <Welcome />
        <Outlet />
      </main>





    </>
  )
}

export default MainLayout