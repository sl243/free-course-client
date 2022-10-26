import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Routers/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router = {route}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
