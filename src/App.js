import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Routers/Router/Router';

function App() {
  return (
    <div>
      <RouterProvider router = {route}></RouterProvider>
    </div>
  );
}

export default App;
