import React from 'react';
import { useParams } from 'react-router';
import UseAppsData from '../../useAppsData/UseAppsData';
import NotFoundApp from '../../ui/NotFoundApp/NotFoundApp';
import Loading from '../../ui/Loding/Loading';
import AppsDetailsCard from '../appDetailsCard/AppsDetailsCard';

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
        <AppsDetailsCard expectedApp={expectedApp} />
    )
}

export default AppDetails;