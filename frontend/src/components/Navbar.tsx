import { useCookies } from "react-cookie";
import { IoSettings } from "react-icons/io5";
import { playOrStopHoverSound, playOrStopSelectSound } from "../helpers/PlayAudio";

export default function Navbar() {
  const [cookies] = useCookies(['sound']);

  return (
    <div className="navbar px-2 flex justify-between bg-mainDark">
      <div className="icon bg-mainOrange p-3">
        <h1 className="font-pricedown text-3xl">SZA</h1>
      </div>
      <div className="settings  flex items-center justify-center">
        <div >
          <IoSettings size={40} className="cursor-pointer text-white/70"
            onMouseEnter={() => {
              if (cookies.sound) {
                playOrStopHoverSound('play');
              }
            }}
            onClick={() => {
              if (cookies.sound) {
                playOrStopSelectSound('play');
              }
            }} />
        </div>
      </div>
    </div>
  )
}

