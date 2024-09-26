const LanguagesSection = ({data}) => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-[#32325D] text-3xl">Languages</h2>
      <div className="flex flex-wrap gap-4 mt-2">
        {data.languages.map((lang) => (
          <div
            key={lang._id}
            className="border-[#E1E4E8] bg-[#F0F4F8] p-4 border rounded-lg w-64"
          >
            <h3 className="font-semibold text-[#32325D] text-xl">
              {lang.name}
            </h3>
            <p className="text-[#4B4F56]">{lang.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;
