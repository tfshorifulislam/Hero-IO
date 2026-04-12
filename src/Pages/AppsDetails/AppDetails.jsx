import React from 'react';
import { useParams } from 'react-router';
import UseAppsData from '../../useAppsData/UseAppsData';

const AppDetails = () => {
    const { id } = useParams()

    const { app, loading } = UseAppsData()

    
    const expectedApp = app.find(apps => apps.id == id)
    console.log(expectedApp)
    return (
        <div>
            <h1>app details page</h1>
        </div>
    );
};

export default AppDetails;