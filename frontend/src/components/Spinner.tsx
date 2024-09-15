import { PulseLoader } from "react-spinners"

export const Spinner = () => {
  return (
    <div className='min-h-screen bg-mainDark flex items-center justify-center'>
      <div className="flex items-end space-x-1">
        <PulseLoader color='#FEA400' size={50} speedMultiplier={.3} />
      </div>
    </div>
  )
}

