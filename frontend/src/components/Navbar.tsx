import { useCookies } from "react-cookie";
import { IoSettings } from "react-icons/io5";
import { playOrStopHoverSound, playOrStopSelectSound } from "../helpers/PlayAudio";

export default function Navbar() {
  const [cookies] = useCookies(['sound', 'visited']);

  if(!cookies.visited) return null;

  return (
    <div className="navbar px-2 flex justify-between bg-mainDark">
      <div className="icon bg-mainOrange p-3">
        <h1 className="font-pricedown text-3xl [text-shadow:0_2px_1px_rgb(0,0,0)]">SZA</h1>
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
              console.log(cookies.sound);
              if (cookies.sound) {
                playOrStopSelectSound('play');
              }
            }} />
        </div>
      </div>
    </div>
  )
}

