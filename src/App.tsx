import Job from "./components/JobList";
import { jobs } from "./data";

function App() {
  return (
    <div className="bg-cyan-50 min-h-screen p-8 space-y-6">
      {jobs.map((job) => (
        <Job key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
