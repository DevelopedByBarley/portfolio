

export default function Alert({ title, children }: { title: string, children: React.ReactNode }) {

  



  return (
    <div id="alert" className="min-h-screen bg-slate-800/70 flex items-center justify-center flex-col fixed top-0 left-0 w-screen backdrop-blur">
      <h1 className="text-7xl text-mainOrange font-pricedown">{title}</h1>
      <div className="w-3/5 mt-3">
        <hr className="bg-white p-.5 w-full mt-5" />
        <p className="text-white my-4 text-center">
          {children}
        </p>
        <hr className="bg-white p-.5 w-full mt-5" />
      </div>

    </div>
  )
}