import { Link } from 'react-router-dom';
import dummyimg from '../../assets/dummy.png'
import { toast, ToastContainer } from 'react-toastify';


const ProfileHeader = ({ data }) => {

  if (data.updated) {
    toast.success('Profile updated successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    data.updated = false
  }

  return (
    <>
      <ToastContainer />
      <div className="flex items-center">
        {/* Profile Picture */}
        <img
          src={data.profile_image === 'default-profile.png' || !data.profile_image ? dummyimg : data.profile_image}
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
          <Link to='/editProfile'>
            <button className="bg-[#5469D4] hover:bg-[#4353A3] mt-4 ml-4 px-4 py-2 rounded-lg text-white transition duration-300">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
