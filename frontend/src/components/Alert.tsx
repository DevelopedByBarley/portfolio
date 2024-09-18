interface AlertProps {
  title: string;
  bgColor: string; // Allow any string, which can be any valid Tailwind class
  children: React.ReactNode;
}

export default function Alert({ title, bgColor, children }: AlertProps) {
  return (
    <div id="alert" className={`min-h-screen flex items-center justify-center flex-col fixed top-0 left-0 w-screen bg-${bgColor} backdrop-blur`}>
      <h1 className="text-7xl text-mainOrange font-pricedown">{title}</h1>
      <div className="p-5 md:p-0 md:w-3/5 mt-3">
        <hr className="bg-white p-.5 w-full mt-5" />
        <div className="text-white my-4 text-center">
          {children}
        </div>
        <hr className="bg-white p-.5 w-full mt-5" />
      </div>
    </div>
  );
}
