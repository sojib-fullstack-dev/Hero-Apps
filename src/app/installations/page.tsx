'use client'
import { useContext } from "react";
import { AppContext } from "@/context/AppProvider";
import { TApp } from "@/type/app.type";
import InstallationCard from "../components/shared/HomePage/InstallationCard";


const InstallationPage = () => {
    const { installedApps } = useContext(AppContext)
    return (
        <div className="my-10 container mx-auto">
            <div className="space-y-3 text-center">

                <h1 className="font-bold text-4xl">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Your Installed Apps
                    </span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            {/* data card  */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <span>Apps Found</span>
                <span className="bg-white text-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {installedApps.length}
                </span>
                
            </div>
            
            {
                installedApps.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                        {
                            installedApps.map((app: TApp, ind: number) => {

                                return (
                                    <InstallationCard key={ind} app={app} />

                                )

                            })

                        }
                          

                    </div>

                ) : (
                    <p className="text-center text-gray-500 font-bold text-3xl py-20">
                        No installed apps found.
                    </p>
                )
            }
              

        </div>
    );
};

export default InstallationPage;