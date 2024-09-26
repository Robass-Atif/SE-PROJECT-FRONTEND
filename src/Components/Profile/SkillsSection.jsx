const SkillsSection = ({data}) => {
  

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">Skills</h2>
      <div className="flex flex-wrap gap-4 mt-2">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="border-[#E1E4E8] bg-[#F0F4F8] px-4 py-1 border rounded-full font-semibold text-[#32325D] transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
