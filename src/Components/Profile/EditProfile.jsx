import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../../firebase'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../loader/index'

const getUser = async (user_id) => {

  const response = await fetch(`https://backend-qyb4mybn.b4a.run/profile/user/${user_id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();

}



const EditProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [customSkill, setCustomSkill] = useState('');
  const [showCustomSkillInput, setShowCustomSkillInput] = useState(false);
  const [languageProficiency, setLanguageProficiency] = useState({});
  const [fileProgress, setFileProgress] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(null);
  const [formData, setFormData] = useState(null)
  const [isUploading, setIsUploading] = useState(false);
  const languages = ['Urdu', 'English', 'Spanish', 'French', 'German', 'Hindi'];
  const proficiencies = ['Beginner', 'Intermediate', 'Fluent', 'Native'];
  const skills = ['Electrican', 'Plumbing', 'Carpanter', 'Gardner', 'Other'];
  const [updating , setUpdating] = useState(false)
  const user_id = '66f2c46b560c53a133c31df9'
  const navigate = useNavigate()


  const { data, error, isLoading } = useQuery({
    queryKey: ['user', user_id],
    queryFn: () => getUser(user_id),
  });

  useEffect(() => {
    if (data && data.skills) {
      setSelectedSkills(data.skills);
    }
    if (data && data.language) {


      const languages = data.language.map(lang => lang.name);
      const proficiencyLevels = data.language.reduce((acc, lang) => {
        acc[lang.name] = lang.level;
        return acc;
      }, {});

      setSelectedLanguages(languages);
      setLanguageProficiency(proficiencyLevels);
    }
  }, [data]);


  if (isLoading) {
    return <Loader />;
  }

 

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if(updating){
    console.log('yes')
  }





  const onSubmit = (data) => {
    const profileData = {
      ...formData, // Assuming formData is defined elsewhere
      ...data,
      skills: selectedSkills,
      languages: selectedLanguages.map(lang => ({
        name: lang,
        level: languageProficiency[lang]
      })),
    };

    setUpdating(true)
    axios.patch(`https://backend-qyb4mybn.b4a.run/profile/edit-profile/${user_id}`, profileData)
      .then(response => {
        toast.success('Profile updated successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate('/profile');
        }, 1000);

      })
      .catch(error => {
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(()=>{
        setUpdating(false)
      })




  };


  const handleFileUpload = (file) => {

    setIsUploading(true);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const fileRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFileProgress(Math.round(progress));


    }, (error) => {
      setFileUploadError(true);
      setIsUploading(false);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {

        setFormData((prevFormData) => ({ ...prevFormData, profile_image: downloadUrl }));
        setIsUploading(false);
        setFile(null);
      });
    });
  };

  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];
    if (selectedFile) {
      handleFileUpload(selectedFile); // Call the upload function directly
    }
  };


  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    if (lang && !selectedLanguages.includes(lang)) {
      setSelectedLanguages([...selectedLanguages, lang]);
      setLanguageProficiency({ ...languageProficiency, [lang]: '' }); // Initialize proficiency level for new language
    }
  };

  const handleAddCustomSkill = () => {
    if (customSkill.trim() && !selectedSkills.includes(customSkill.trim())) {
      setSelectedSkills([...selectedSkills, customSkill.trim()]);
    }
    setCustomSkill(''); // Clear the input after adding
  };

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    if (skill === 'Other') {
      setShowCustomSkillInput(true);
    } else if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setShowCustomSkillInput(false);
    }
  };

  const handleProficiencyChange = (lang, level) => {
    setLanguageProficiency({ ...languageProficiency, [lang]: level });
  };

  const removeItem = (item, type) => {
    if (type === 'language') {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== item));
      const updatedProficiency = { ...languageProficiency };
      delete updatedProficiency[item]; // Remove proficiency for deleted language
      setLanguageProficiency(updatedProficiency);
    } else {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== item));
    }
  };
  const imageUrl =
    formData?.profile_image ||
    data?.profile_image ||
    'https://via.placeholder.com/150';

  return (
    <>
      <ToastContainer />
      {updating ? (<Loader/>) :
      (

      <div className="flex justify-center items-center min-h-screen">

        
        <div className="p-6 w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>

          <div className="flex flex-col items-center mb-4">
            <div className="relative">
              <input
                type="file"
                ref={fileInputRef}
                className="absolute w-full h-full opacity-0"
                accept="image/*"
                onChange={handleFileChange}
              />
              <img
                src={imageUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover cursor-pointer mb-2"
                onClick={handleImageClick}
              />
              <span>
                {fileUploadError ? (
                  <span className="text-red-500">Error Uploading File</span>
                ) : fileProgress > 0 && fileProgress < 100 ? (
                  <span className="text-slate-500">{`Uploading ${fileProgress}%`}</span>
                ) : fileProgress === 100 ? (
                  <span className="text-green-600">Image Updated</span>
                ) : null}
              </span>
            </div>
          </div>




          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
            {/* First Name */}
            <div className="mb-4 w-full">
              <input
                className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full text-sm sm:text-base focus:outline-none pr-10"
                id="name"
                placeholder="Full Name"
                defaultValue={data.name ? data.name : ''}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
            </div>


            {/* Address */}
            <div className="mb-4 w-full">
              <input
                className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full text-sm sm:text-base focus:outline-none pr-10"
                id="address"
                placeholder="Address"
                defaultValue={data.location ? data.location : ''}

                {...register('address', { required: 'Address is required' })}
              />
              {errors.address && <p className="text-red-500 text-xs italic">{errors.address.message}</p>}
            </div>

            {/* Profile Description */}
            <div className="mb-4 w-full">
              <textarea
                className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full text-sm sm:text-base focus:outline-none"
                id="profileDescription"
                placeholder="Profile Description"
                defaultValue={data.profile_description ? data.profile_description : ''}

                {...register('profileDescription', { required: 'Profile Description is required' })}
              />
              {errors.profileDescription && <p className="text-red-500 text-xs italic">{errors.profileDescription.message}</p>}
            </div>

            {/* Languages Section */}
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">Languages</label>
              <select
                className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full text-sm sm:text-base focus:outline-none pr-10"
                onChange={handleLanguageChange}
                defaultValue=""
              >
                <option value="" disabled>Select a language</option>
                {languages.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedLanguages.map((lang) => (
                  <div key={lang} className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {lang}
                    <select
                      className="ml-2 border-gray-300 p-1 rounded-lg"
                      value={languageProficiency[lang] || ""}
                      onChange={(e) => handleProficiencyChange(lang, e.target.value)}
                    >
                      <option value="" disabled>Select proficiency</option>
                      {proficiencies.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="ml-2 text-red-500"
                      onClick={() => removeItem(lang, 'language')}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">Skills</label>
              <select
                className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full text-sm sm:text-base focus:outline-none pr-10"
                onChange={handleSkillChange}
                defaultValue=""
              >
                <option value="" disabled>Select a skill</option>
                {['Electrician', 'Plumbing', 'Carpenter', 'Gardener', 'Other'].map((skill) => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>

              {/* Show input for custom skill when "Other" is selected */}
              {showCustomSkillInput && (
                <div className="mt-2 flex items-center">
                  <input
                    type="text"
                    className="border-gray-300 p-2 rounded-lg w-full"
                    placeholder="Enter custom skill"
                    value={customSkill}
                    onChange={(e) => setCustomSkill(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-custom-violet text-white ml-2 px-3 py-2 rounded-lg hover:bg-violet-700"
                    onClick={handleAddCustomSkill}
                  >
                    Add
                  </button>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedSkills.map((skill) => (
                  <div key={skill} className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {skill}
                    <button
                      type="button"
                      className="ml-2 text-red-500"
                      onClick={() => removeItem(skill, 'skill')}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
            

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-custom-violet text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition duration-300"
              >
                Save Changes
              </button>
          </form>
        </div>
      </div>
      )}
    </>
  );
};

export default EditProfile;
