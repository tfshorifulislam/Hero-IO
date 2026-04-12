import React from 'react';
import { useParams } from 'react-router';
import UseAppsData from '../../useAppsData/UseAppsData';
import { HashLoader } from 'react-spinners';

const AppDetails = () => {
    const { id } = useParams()
    const { app, loading } = UseAppsData()

    const expectedApp = app.find(item => String(item.id) === id)
    console.log(expectedApp)

    if (loading) {
        return (<HashLoader />)
    }

    return (
        <div className='mb-10'>
            <h1>{expectedApp.title}</h1>
            <img src={expectedApp.image} alt="" />
        </div>
    )
}

export default AppDetails;