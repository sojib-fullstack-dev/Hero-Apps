import { AppContext } from "@/context/AppProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";

interface IApp {
  id: number;
  image: string;
  title: string;
  companyName: string;
  description: string;
  size: number;
  reviews: string;
  ratingAvg: number;
  downloads: string;
}

const InstallationCard = ({ app }: { app: IApp }) => {

    const {installedApps,setInstalledApps } = useContext(AppContext)

    const handleRemove = () => {
  const remainingApps = installedApps.filter(
    (item) => item.id !== app.id
   
  );
  setInstalledApps(remainingApps);
  
   toast.success(`${app.title} Uninstall successfully!`);
};

  return (
    <div className="card bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      {/* Top */}
      <div className="flex gap-3 p-4">
        <Image
          src={app.image}
          alt={app.title}
          width={58}
          height={58}
          className="w-14 h-14 rounded-xl object-cover"
        />

        <div className="flex-1">
          <h2 className="font-bold text-sm text-gray-800">
            {app.title}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            {app.companyName}
          </p>

          <div className="flex items-center gap-2 mt-2 text-xs">
            <span className="font-medium">{app.ratingAvg}</span>
            <span className="text-yellow-500">★</span>
            <span className="text-gray-400">
              ({app.reviews})
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="px-4 text-xs text-gray-500 leading-5 line-clamp-2">
        {app.description}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 text-center mt-5 border-t border-gray-100 pt-3">
        <div>
          <p className="font-bold text-sm">{app.downloads}</p>
          <p className="text-[10px] text-gray-400">Downloads</p>
        </div>

        <div className="border-x border-gray-200">
          <p className="font-bold text-sm">{app.size} MB</p>
          <p className="text-[10px] text-gray-400">Size</p>
        </div>

        <div>
          <p className="font-bold text-sm">{app.ratingAvg} ★</p>
          <p className="text-[10px] text-gray-400">Rating</p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-between p-4">
        <Link href={`/apps/${app.id}`}>
          <button className="btn btn-success text-white w-full min-h-9 h-9 rounded-lg text-xs">
            View Details
          </button>
        </Link>
        <div>
        <button 
         onClick={handleRemove} className="btn btn-success text-white w-full min-h-9 h-9 rounded-lg text-xs">
            Uninstall
            
          </button>
          
        </div>
      </div>
         
    </div>
  );
};

export default InstallationCard;