
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Main from './pages/Main';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />} >
          <Route path='/' element={<Main />} />
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
