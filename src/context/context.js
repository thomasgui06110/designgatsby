import React, { useState, createContext } from "react";
import sublinks from "../constants/links";
import { useStaticQuery } from "gatsby";

const GatsbyContext = createContext();

// PROVIDER CONSUMER

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false)
  const [links, setLinks] = useState(sublinks)

  const showSidebar = () => {
    setisSidebarOpen(true)
  }

  const hideSidebar = () => {
    setisSidebarOpen(false)
  }

  return (
    <GatsbyContext.Provider value={{isSidebarOpen, links, showSidebar, hideSidebar}}>
      {children}
    </GatsbyContext.Provider>
  );
};

export {GatsbyContext, GatsbyProvider}