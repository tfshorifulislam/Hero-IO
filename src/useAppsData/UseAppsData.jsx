import React, { useEffect, useState } from 'react';

const UseAppsData = () => {

    const [app, setApp] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            setTimeout(() => {
                setApp(data)
                setLoading(false)
            }, 1500)

        }
        fetchData()
    }, [])



    return { app, loading };

};

export default UseAppsData;