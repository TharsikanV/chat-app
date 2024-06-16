import { Outlet } from 'react-router-dom';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
   <main>
    <Outlet/>
   </main>
  );
}

export default App;
