import InstallBtn from "@/app/components/AppsBtn/InstallBtn";
import { getData } from "@/lib/app";
import { TApp } from "@/type/app.type";
import Image from "next/image";
import Link from "next/link";

interface IAppDetailsParams {
    params: {
        id: string
    }
}

const AppDetails = async ({ params }: IAppDetailsParams) => {
    const { id } = await params;
    const allApps = await getData()
    // if(!allApps){
    //     return <p>No Apps Found</p>
    // }
    const app= allApps.find((app: TApp) => app.id === Number(id))

    if (!app) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <div className="text-center space-y-4">
                    <div className="text-8xl">📱</div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        App Not Found!
                    </h1>
                    <p className="text-gray-400 text-lg">
                        The app you are looking for does not exist.
                    </p>
                    <Link href="/Linkpps" className="btn btn-primary rounded-xl px-8 mt-4">
                        Back to Apps
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-4">

                {/* Hero Banner */}
                <Link href="/apps">
                    <button className="btn btn-sm rounded-full mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none hover:opacity-90">
                        ← Back to Apps
                    </button>
                </Link>
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-3xl p-6 md:p-8 mb-8 text-white">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <Image
                            src={app.image}
                            alt={app.title}
                            width={120}
                            height={120}
                            className="rounded-2xl w-24 h-24 md:w-28 md:h-28 object-cover border-4 border-white shadow-lg"
                        />
                        <div className="text-center md:text-left">
                            <h1 className="font-bold text-2xl md:text-3xl">{app.title}</h1>
                            <p className="text-white/70 mt-1 text-sm md:text-base">{app.companyName}</p>
                            <div className="flex items-center gap-2 mt-3 justify-center md:justify-start flex-wrap">
                                <span className="text-yellow-300 text-xl">★</span>
                                <span className="font-bold text-xl">{app.ratingAvg}</span>
                                <span className="text-white/60 text-sm">/ 5.0</span>
                                <span className="text-white/60 text-sm">({app.reviews} reviews)</span>
                            </div>
                        </div>
                        <div className="md:ml-auto w-full md:w-auto">
                            <InstallBtn app={app}/>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left - Stats */}
                    <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
                            <h2 className="font-bold text-lg mb-4 text-gray-800">App Stats</h2>
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                                <div className="flex justify-between items-center bg-blue-50 rounded-xl px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-blue-500">⬇️</span>
                                        <span className="text-gray-500 text-xs md:text-sm">Downloads</span>
                                    </div>
                                    <span className="font-bold text-blue-600 text-sm">{app.downloads}</span>
                                </div>
                                <div className="flex justify-between items-center bg-purple-50 rounded-xl px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-purple-500">📦</span>
                                        <span className="text-gray-500 text-xs md:text-sm">Size</span>
                                    </div>
                                    <span className="font-bold text-purple-600 text-sm">{app.size} MB</span>
                                </div>
                                <div className="flex justify-between items-center bg-pink-50 rounded-xl px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-pink-500">💬</span>
                                        <span className="text-gray-500 text-xs md:text-sm">Reviews</span>
                                    </div>
                                    <span className="font-bold text-pink-600 text-sm">{app.reviews}</span>
                                </div>
                                <div className="flex justify-between items-center bg-yellow-50 rounded-xl px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-yellow-500">⭐</span>
                                        <span className="text-gray-500 text-xs md:text-sm">Rating</span>
                                    </div>
                                    <span className="font-bold text-yellow-600 text-sm">{app.ratingAvg} / 5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Description & Ratings */}
                    <div className="lg:col-span-2 space-y-6 order-1 lg:order-2">

                        {/* Description */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
                            <h2 className="font-bold text-lg md:text-xl mb-3 text-gray-800">About This App</h2>
                            <p className="text-gray-500 leading-relaxed text-sm">{app.description}</p>
                        </div>

                        {/* Ratings Breakdown */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
                            <h2 className="font-bold text-lg md:text-xl mb-5 text-gray-800">Ratings Breakdown</h2>
                            <div className="space-y-4">
                                {app.ratings.map((rating) => {
                                    const percent = (rating.count / 5) * 100
                                    return (
                                        <div key={rating.name} className="flex items-center gap-3">
                                            <span className="text-xs md:text-sm text-gray-500 w-16 md:w-20 flex-shrink-0">
                                                {rating.name}
                                            </span>
                                            <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                                                    style={{ width: `${percent}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xs md:text-sm font-bold text-gray-700 w-5 flex-shrink-0">
                                                {rating.count}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;