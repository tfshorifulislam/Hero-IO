import React from 'react';
import { useParams } from 'react-router';
import UseAppsData from '../../useAppsData/UseAppsData';
import { HashLoader } from 'react-spinners';
import NotFoundApp from '../../ui/NotFoundApp/NotFoundApp';
import Loading from '../../ui/Loding/Loading';

const AppDetails = () => {
    const { id } = useParams()
    const { app, loading } = UseAppsData()

    const expectedApp = app.find(item => String(item.id) === id)
    console.log(expectedApp)

    if (loading) {
        return <Loading />
    }
    if (!expectedApp) {
        return <NotFoundApp />
    }

    return (
        <div className='mb-10'>
            <h1>{expectedApp.title}</h1>
            <img src={expectedApp.image} alt="" />
        </div>
    )
}

export default AppDetails;