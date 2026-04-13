import React, { useContext } from 'react';
import { DefaultZIndexes, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { appContext } from '../../Context/InstalledAppsContext';
import UseAppsData from '../../useAppsData/UseAppsData';

const Dashboard = () => {
    const { install } = useContext(appContext)
    const { app } = UseAppsData()
    const uninstalledApp = app.length - install.length;
    const data01 = [
        { name: ' install', value: install.length },

    ];
    const data02 = [
        { name: 'Uninstall', value: uninstalledApp },

    ];


    return (
        <div className='min-h-screen '>
            <h1 className='text-center text-2xl md:text-4xl font-bold'><span className='text-[#9f62f2]'>
                Install</span> and <span className='text-[#82ca9d]'>UnInstall</span> Apps</h1>

            <div className='flex justify-center'>
                <PieChart
                    style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
                    responsive
                >
                    <Pie
                        data={data01}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius="50%"
                        fill="#9F62F2"
                        isAnimationActive={true}
                    />
                    <Pie
                        data={data02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="80%"
                        fill="#82ca9d"
                        label
                        isAnimationActive={true}
                    />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>

        </div>
    );
};

export default Dashboard;