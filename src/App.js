import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import SideCart from './components/SideCart';
import Home from './pages/Home';
import { openSidebar } from './Store/sidebarSlice';

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpenSidebar);
  const openHandler = ()=>{
    dispatch(openSidebar());
  }
  return (
    <>
     <Navbar/>
     <button onClick={openHandler}>ayush
     <SideCart isOpen={isOpen}/>
     </button>
     <Home/>
    </>
  );
}

export default App;
