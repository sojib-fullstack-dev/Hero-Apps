import Image from "next/image";
import plyS from "@/assets/plystore.png";
import appS from "@/assets/appstore.png";
import banner from "@/assets/hero.png";

const Banner = () => {
  return (
    <div className="text-center">

      {/* Hero Section */}
      <div className="mt-10">

        {/* Heading */}
        <h1 className="font-bold text-5xl text-[#192f49]">
          We Build
          <br />

          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>

        {/* Description */}
        <p className="text-gray-500 mt-5 leading-7">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        {/* Store Buttons */}
        <div className="flex justify-center gap-4 mt-6">

          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <Image
              src={plyS}
              width={20}
              height={20}
              alt="Google Play"
            />
            <span className="font-bold">Google Play</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <Image
              src={appS}
              width={20}
              height={20}
              alt="App Store"
            />
            <span className="font-bold">App Store</span>
          </button>

        </div>

        {/* Hero Image */}
        <div className="flex justify-center mt-5">
          <Image
            src={banner}
            width={600}
            height={600}
            alt="Hero Banner"
          />
        </div>
      </div>


      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-10 ">

        <h2 className="text-2xl font-bold">
          Trusted by Millions, Built for You
        </h2>

        <div className="flex justify-center gap-20 mt-8">

          {/* 1 */}
          <div>
            <p className="text-sm">Total Downloads</p>
            <h3 className="text-3xl font-bold mt-1">
              29.6M
            </h3>
            <p className="text-xs mt-1">
              21% More Than Last Month
            </p>
          </div>

          {/* 2 */}
          <div>
            <p className="text-sm">Total Reviews</p>
            <h3 className="text-3xl font-bold mt-1">
              906K
            </h3>
            <p className="text-xs mt-1">
              46% More Than Last Month
            </p>
          </div>

          {/* 3 */}
          <div>
            <p className="text-sm">Active Apps</p>
            <h3 className="text-3xl font-bold mt-1">
              132+
            </h3>
            <p className="text-xs mt-1">
              31 More Will Launch
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Banner;