import React, { useContext } from 'react';
import { appContext } from '../../Context/InstalledAppsContext';

const Installation = () => {

    const { install, setInstall } = useContext(appContext)
    console.log(install)
       
    return (
        <div>
            {
                install.map(i => <div>{i.title}</div>)
            }
        </div>
    );
};

export default Installation;