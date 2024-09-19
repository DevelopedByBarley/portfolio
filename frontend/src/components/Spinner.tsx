import { PulseLoader } from "react-spinners"

export const Spinner = ({ size, bgClass }: { size: number, bgClass: string }) => {
  return (
    <div className={`${bgClass}  bg-mainDark flex items-center justify-center`}>
        <PulseLoader color='#FEA400' size={size} speedMultiplier={.3} />
    </div>
  )
}

