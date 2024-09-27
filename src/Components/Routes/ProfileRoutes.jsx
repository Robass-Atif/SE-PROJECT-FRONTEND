import React, { useRef } from "react"; // Import useRef
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from 'react-router-dom';
import Loader from "../loader";
import ProfileHeader from "../Profile/ProfileHeader";
import AboutSection from "../Profile/AboutSection";
import SkillsSection from "../Profile/SkillsSection";
import LanguagesSection from "../Profile/LanguagesSection";
import LocationSection from "../Profile/LocationSection";
import ServicesSection from "../Profile/ServicesSection";
import axios from "axios";


const getUser = async (user_id) => {
  const response = await fetch(`https://backend-qyb4mybn.b4a.run/profile/user/${user_id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


const getServices = async (user_id) => {
  const response = await axios.get(`https://backend-qyb4mybn.b4a.run/serviceProvider/get-user-services/${user_id}`);
  return response.data;
};

const ProfileRoutes = () => {
  const { currentUser } = useSelector((state) => state.user);
  const user_id = currentUser.data._id;
  const location = useLocation();
  const { updated } = location.state || {};


  const { data: userData, error: userError, isLoading: userLoading } = useQuery({
    queryKey: ['user', user_id],
    queryFn: () => getUser(user_id),
  });


  const { data: servicesData, error: servicesError, isLoading: servicesLoading } = useQuery({
    queryKey: ['services', user_id],
    queryFn: () => getServices(user_id),
  });


  if (userLoading || servicesLoading) {
    return <Loader />;
  }


  if (userError || servicesError) {
    return <div>Error: {userError?.message || servicesError?.message}</div>;
  }



  return (
    <>
      <ToastContainer />
      <div className="bg-[#F7F9FC] p-6 min-h-screen text-[#333] transition-colors duration-300">
        <div className="border-[#E1E4E8] bg-white shadow-lg mx-auto p-6 border rounded-lg max-w-4xl">
          <ProfileHeader data={{ name: userData.name, email: userData.email, profile_image: userData.profile_image, updated: updated }} />
          <AboutSection data={{ about: userData.profile_description }} />
          <SkillsSection data={{ skills: userData.skills }} />
          <LanguagesSection data={{ languages: userData.language }} />
          <LocationSection data={{ location: userData.location }} />
          <ServicesSection data={servicesData} />
        </div>
      </div>
    </>
  );
};

export default ProfileRoutes;
