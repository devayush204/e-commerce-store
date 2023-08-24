import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
      isOpenSidebar: false,
    },
    reducers: {
      openSidebar: (state) => {
        state.isOpenSidebar = true;
      },
      closeSidebar: (state) => {
        state.isOpenSidebar = false;
      },
    },
  });

  export const { openSidebar, closeSidebar } = sidebarSlice.actions;
  export default sidebarSlice.reducer;
  