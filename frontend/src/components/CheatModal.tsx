import { SetStateAction, useEffect, useState } from "react"
import { playOrStopMissionPassed } from "../helpers/PlayAudio";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";

type GuestAdminType = {
  name: string,
  password: string
}


const CheatModal = ({ setShowPassedModal }: { setShowPassedModal: React.Dispatch<SetStateAction<boolean>> }) => {

  const [guestAdmin, setGuestAdmin] = useState<null | GuestAdminType>(null);

  const createGuestAdmin = () => {
    axios.post(import.meta.env.VITE_API_BASE_URL + "/admin/guest").then(res => {
      setGuestAdmin(res.data.guest);

    }).finally(() => {

    })
  }

  useEffect(() => {
    createGuestAdmin();
  }, [])


  const handleCheatModal = () => {
    setShowPassedModal(false)
    playOrStopMissionPassed('stop')
  }


  return (
    <div className='fixed h-screen w-screen backdrop-blur-lg bg-mainLightDark/60 flex items-center justify-center transition-all duration-300'>
      <div className="container bg-mainLightDark mx-5 xl:w-1/3 xl:mx-auto min-h-96 rounded-xl p-3 xl:p-10  text-center text-white space-y-4 border-2 border-black">
        <div className="flex justify-end">
          <IoIosCloseCircle size={25} className="text-mainOrange cursor-pointer" onClick={handleCheatModal} />

        </div>
        <div className="space-y-10 pb-10" >
          <h1 className="font-pricedown text-5xl text-mainOrange [text-shadow:0_5px_8px_rgb(0,0,0)]">MISSION PASSED </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed, distinctio nostrum aperiam, blanditiis odio quia ipsa in quae et dicta? Modi exercitationem perferendis, quos veniam incidunt veritatis ut! Quas.</p>

        </div>
        <div className="space-y-10 ">
          <div className="shadow-md shadow-mainOrange w-full min-h-5 py-3 text-white rounded-md" >
            {guestAdmin?.name ?? 'Fetching user error!'}
          </div>
          <div className="shadow-md shadow-mainOrange w-full min-h-5 py-3 text-white rounded-md">
            {guestAdmin?.password ?? 'Fetching user error!'}
          </div>
          <div>
            <Link to="/admin" target="_blank" className="border border-mainOrange p-3 hover:bg-mainOrange hover:text-mainDark transition-all duration-300">Admin felület</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CheatModal
