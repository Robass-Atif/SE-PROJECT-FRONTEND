const PortfolioCard = ({ project, onEdit, onDelete }) => {
  return (
    <div className="border-[#E1E4E8] bg-[#F0F4F8] shadow-lg border rounded-lg transform transition-transform overflow-hidden hover:scale-105 duration-300">
      <img
        src={project.src}
        alt={project.alt}
        className="w-full h-48 object-cover"
      />
      <p className="p-4 text-[#32325D]">{project.caption}</p>
      <div className="flex justify-between p-4">
        <button
          onClick={() => onEdit(project)}
          className="bg-[#5469D4] px-4 py-2 rounded-lg text-white"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(project.id)}
          className="bg-red-500 px-4 py-2 rounded-lg text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
