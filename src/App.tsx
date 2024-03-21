import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';
import './App.css';
import { ShoppingProvider } from './context/ShoppingProvider';

function App() {
  return (
    <ShoppingProvider>
      <RouterProvider router={router} />
    </ShoppingProvider>
  );
}

export default App;
