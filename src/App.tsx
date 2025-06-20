import { useState } from "react";
import { jobs as allJobs } from "./data";
import Job from "./components/JobList";

function App() {
  const [filters, setFilters] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    if (!filters.includes(tag)) {
      setFilters((prev) => [...prev, tag]);
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFilters((prev) => prev.filter((t) => t !== tag));
  };

  const handleClear = () => setFilters([]);

  const filteredJobs = filters.length
    ? allJobs.filter((job) => {
      const tags = [job.role, job.level, ...job.languages, ...job.tools];
      return filters.every((filter) => tags.includes(filter));
    })
    : allJobs;

  return (
    <div className="bg-cyan-50 min-h-screen p-8 space-y-6">
      {filters.length > 0 && (
        <div className="bg-white shadow-md p-4 mb-6 rounded flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <div
                key={filter}
                className="flex items-center bg-teal-100 text-teal-600 font-semibold rounded overflow-hidden"
              >
                <span className="px-3 py-1">{filter}</span>
                <button
                  onClick={() => handleRemoveTag(filter)}
                  className="bg-teal-600 text-white px-2 hover:bg-gray-800"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleClear}
            className="ml-auto text-sm text-teal-600 hover:underline"
          >
            Clear
          </button>
        </div>
      )}

      {filteredJobs.map((job) => (
        <Job key={job.id} {...job} onTagClick={handleTagClick} />
      ))}
    </div>
  );
}

export default App;
