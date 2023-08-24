import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar } from '../Store/sidebarSlice';


const SideCart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isopenSidebar)

  const closeHandler = ()=>{
    dispatch(closeSidebar());
  }
  
  return (
    // <div className={`fixed top-0 w-[30%] h-screen bg-white shadow-lg transition-all right-0 z-50  `}>
    //   heyyy
    // </div>
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-25 z-40" onClick={closeHandler}></div>
      )}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg transform transition-transform ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          {/* Add your sidebar content here */}
          <h2 className="text-xl font-bold mb-4">Sidebar Content</h2>
          <p>Put your content here...</p>
        </div>
      </div>
    </>
  )
}

export default SideCart
