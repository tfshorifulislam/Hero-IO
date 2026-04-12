
import { FaDownload } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const InstallationCard = ({ i }) => {
    return (
        <div className=''>
            <div className="card lg:card-side bg-base-100 shadow-sm items-center">
                <figure>
                    <img
                        className="max-w-40 p-5"
                        src={i.image}
                        alt={i.title} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="card-title">{i.title}</h2>
                            <div className="flex gap-4 items-center">
                                <div className="flex gap-2 items-center text-[#00D390] ">
                                    <FaDownload />
                                    <p >
                                        {i.downloads}
                                    </p>
                                </div>
                                <div className="flex gap-2 items-center ">
                                    <IoStar className="text-[#FF8811] font-semibold" />
                                    <p className="text-[#627382]">
                                        {i.ratingAvg}
                                    </p>
                                    <p>
                                        {i.size} MB
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="btn text-white font-semibold bg-[#00D390] rounded-sm   ">
                                Uninstall
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InstallationCard;