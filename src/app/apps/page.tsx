import { TApp } from "@/type/app.type";
import AppCard from "../components/shared/AppCard";
import { getData } from "@/lib/app";




const AppsPages = async () => {
    const data = await getData();
   if(data.length < 1){
    <p>Not Found</p>
   }
    return (
        <div className="my-10 container mx-auto">
            <div className="space-y-3 text-center">

                <h1 className="font-bold text-4xl">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Our All Applications
                    </span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            {/* data card  */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {   data?
                    data.map((app: TApp, ind: number) => {
                        return (
                            <AppCard key={ind} app={app} />
                        )

                    }):<p>No Data Found</p>
                }

            </div>

        </div>
    );
};

export default AppsPages;