const ProfileHeader = ({data}) => {
  

  return (
    <div className="flex items-center">
      {/* Profile Picture */}
      <img
        src={data.profile_image}
        alt="Profile"
        className="border-[#E1E4E8] shadow-lg border rounded-full w-32 h-32"
      />
      {/* Profile Details */}
      <div className="flex-1 ml-6">
        <h1 className="font-bold text-[#32325D] text-xl md:text-4xl transition-colors duration-300">
          {data.name}
        </h1>
        <p className="mt-2 text-[#6B6B76] text-sm md:text-xl">
          {data.email}
        </p>
        <button className="bg-[#5469D4] hover:bg-[#4353A3] mt-4 px-4 py-2 rounded-lg text-white transition duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
