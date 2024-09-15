
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

function App() {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />} >
          <Route path='/' element={<h1>Hello</h1>} />
        </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
