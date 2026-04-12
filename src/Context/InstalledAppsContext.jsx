import React, { createContext, useState } from 'react';


export const appContext = createContext()



const InstalledAppsContext = ({ children }) => {
    const [install, setInstall] = useState([])

    const data = {
        install,
        setInstall
    }
    
    return (
        <appContext.Provider value={data}>{children}</appContext.Provider>
    );
};

export default InstalledAppsContext;