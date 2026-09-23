

const loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">

            {/* Spinner */}
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-transparent animate-spin"></div>
            </div>

            {/* Text */}
            <div className="mt-6 text-center space-y-2">
                <h2 className="font-bold text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Loading...
                </h2>
                <p className="text-gray-400 text-sm">
                    Please wait a moment
                </p>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>

        </div>
    );
};

export default loading;