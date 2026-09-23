

const AppsLoading = () => {
    return (
        <div className="container mx-auto py-10">

            {/* Title Skeleton */}
            <div className="text-center space-y-3 mb-10">
                <div className="skeleton h-4 w-32 mx-auto rounded-full"></div>
                <div className="skeleton h-8 w-64 mx-auto rounded-xl"></div>
                <div className="skeleton h-4 w-96 mx-auto rounded-full"></div>
            </div>

            {/* Cards Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    Array(6).fill(0).map((_, ind) => (
                        <div key={ind} className="border border-gray-200 rounded-xl p-4 space-y-4">

                            {/* Top */}
                            <div className="flex gap-3">
                                <div className="skeleton w-14 h-14 rounded-xl"></div>
                                <div className="space-y-2 flex-1">
                                    <div className="skeleton h-4 w-3/4 rounded-full"></div>
                                    <div className="skeleton h-3 w-1/2 rounded-full"></div>
                                    <div className="skeleton h-3 w-1/3 rounded-full"></div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <div className="skeleton h-3 w-full rounded-full"></div>
                                <div className="skeleton h-3 w-4/5 rounded-full"></div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                                <div className="space-y-1 text-center">
                                    <div className="skeleton h-4 w-12 mx-auto rounded-full"></div>
                                    <div className="skeleton h-3 w-16 mx-auto rounded-full"></div>
                                </div>
                                <div className="space-y-1 text-center">
                                    <div className="skeleton h-4 w-12 mx-auto rounded-full"></div>
                                    <div className="skeleton h-3 w-16 mx-auto rounded-full"></div>
                                </div>
                                <div className="space-y-1 text-center">
                                    <div className="skeleton h-4 w-12 mx-auto rounded-full"></div>
                                    <div className="skeleton h-3 w-16 mx-auto rounded-full"></div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="skeleton h-9 w-full rounded-lg"></div>

                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default AppsLoading;