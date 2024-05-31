import { useState, useEffect, ChangeEvent } from 'react';
import useClickAway from '../hooks/useClickAway';
import styles from '../styles/components/job-search.module.scss';

interface Job {
  id: number;
  title: string;
  category: string;
  location: string;
}

const JobSearch: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const popupRef = useClickAway<HTMLDivElement>(() => setShowPopup(false));

  useEffect(() => {
    fetch('/jobs.json')
      .then(response => response.json())
      .then((data: Job[]) => {
        setJobs(data);
      });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredJobs(filtered);
      setShowPopup((searchTerm.length > 0 || location.length > 0));
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, location, jobs]);

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <div className={styles["job-search"]}>
      <h1 className={styles.title}>Job Search</h1>
      <div className={styles.filters}>
        <label className={styles.label}>
          Job Title:
          <input 
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className={styles.input}
            placeholder="Type job title..."
          />
        </label>
        <label className={styles.label}>
          Location:
          <input 
            type="text"
            value={location}
            onChange={handleLocationChange}
            className={styles.input}
            placeholder="Type location..."
          />
        </label>
      </div>
      {showPopup && (
        <div className={styles.popup} ref={popupRef}>
          {filteredJobs.length > 0 ? (
            <ul className={styles.jobList}>
              {filteredJobs.map(job => (
                <li key={job.id} className={styles.jobItem}>
                  <h2 className={styles.jobTitle}>{job.title}</h2>
                  <p className={styles.jobDetails}>{job.category} - {job.location}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.noJobs}>No jobs match your criteria.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobSearch;
