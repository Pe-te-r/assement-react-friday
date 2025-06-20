type JobProps = {
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  onTagClick?: (tag: string) => void; // <- NEW
};

const Job: React.FC<JobProps> = ({
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  onTagClick
}) => {
  const tags = [role, level, ...languages, ...tools];

  return (
    <div
      className={`bg-white shadow-md p-6 rounded-md border-l-4 ${featured ? "border-teal-600" : "border-transparent"
        } flex flex-col md:flex-row items-start md:items-center justify-between gap-4`}
    >
      <div className="flex items-center gap-6">
        <img
          src={logo}
          alt={company}
          className="w-12 h-12 md:w-16 md:h-16 object-contain"
        />
        <div>
          <div className="flex gap-4 items-center">
            <h3 className="text-teal-600 font-bold">{company}</h3>
            {isNew && (
              <span className="bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                NEW!
              </span>
            )}
            {featured && (
              <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                Featured
              </span>
            )}
          </div>
          <h2 className="font-bold text-lg text-gray-900 hover:text-teal-600 cursor-pointer">
            {position}
          </h2>
          <div className="text-gray-500 text-sm flex gap-2 mt-1">
            <span>{postedAt}</span>
            <span>•</span>
            <span>{contract}</span>
            <span>•</span>
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-gray-200 md:border-0 md:ml-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            onClick={() => onTagClick?.(tag)} // Call parent handler
            className="bg-teal-100 text-teal-600 font-semibold px-3 py-1 rounded cursor-pointer text-sm hover:bg-teal-600 hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Job;
