import { TApp } from "@/type/app.type";
import AppCard from "../AppCard";
import { getData } from "@/lib/app";



const TrendingApps = async () => {
    const data = await getData();


    return (

        <div className="my-10 container mx-auto">
            <div className="space-y-3 mx-auto text-center">
                <h1 className="font-bold text-4xl">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Trending Apps
                    </span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            {/* data card  */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                { data &&
                    data.slice(0, 8).map((app: TApp, ind: number) => {
                        return (
                            <AppCard key={ind} app={app} />
                        )

                    })
                }

            </div>

        </div>
    );
};

export default TrendingApps;