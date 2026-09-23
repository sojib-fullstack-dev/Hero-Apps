'use client'
import { AppContext } from '@/context/AppProvider';
import { TApp } from '@/type/app.type';
import { useContext } from 'react';
import {  toast } from 'react-toastify';


const InstallBtn = ({ app }: { app: TApp }) => {

    const { installedApps, setInstalledApps } = useContext(AppContext);

    const handleInsBtnClick = () => {
        console.log('btn tiger', app)
        setInstalledApps([...installedApps, app])
       toast.success(`${app.title} installed successfully!`);
    }

    return (
        <button onClick={() => handleInsBtnClick()} className="btn bg-white text-purple-600 hover:bg-gray-100 border-none rounded-xl px-8 font-bold w-full md:w-auto">
            Install Now
        </button>
    );
};

export default InstallBtn;