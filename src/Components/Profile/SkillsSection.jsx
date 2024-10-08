const SkillsSection = ({ data }) => {


  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">Skills</h2>
      <div className="flex flex-wrap gap-4 mt-2">

        {data.skills && data.skills.length > 0 ? (
          data.skills.map((skill) => (
            <span
              key={skill}
              className="border-[#E1E4E8] bg-[#F0F4F8] px-4 py-1 border rounded-full font-semibold text-[#32325D] transition-colors duration-300"
            >
              {skill}
            </span>
          ))
        ) : (
          <span className="text-gray-500">Highlight your strengths by adding relevant skills to your profile. The right skills can help potential clients find you faster.</span>
        )}

      </div>
    </div>
  );
};

export default SkillsSection;
