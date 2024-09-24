const LanguagesSection = () => {
  const languages = [
    { language: "English", proficiency: "Fluent" },
    { language: "Spanish", proficiency: "Conversational" },
  ];

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">Languages</h2>
      <div className="flex flex-wrap gap-4 mt-2">
        {languages.map((lang) => (
          <div
            key={lang.language}
            className="border-[#E1E4E8] bg-[#F0F4F8] p-4 border rounded-lg w-64"
          >
            <h3 className="font-semibold text-[#32325D] text-xl">
              {lang.language}
            </h3>
            <p className="text-[#4B4F56]">{lang.proficiency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;
