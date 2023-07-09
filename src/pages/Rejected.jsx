import { useSelector } from 'react-redux';
import InnerCard from '../components/InnerCard';

const Rejected = () => {
    const { rejectedJobs } = useSelector(state => state.jobsSlice);
    return (
        <div style={{ display: "flex" }}>
            {rejectedJobs?.map((job) => (
                <InnerCard key={job.id} job={job} isSelecting={false} />
            ))}
        </div>
    )
}

export default Rejected