import { useSelector } from 'react-redux';
import InnerCard from '../components/InnerCard';

const Applied = () => {
    const { appliedJobs } = useSelector(state => state.jobsSlice);
    return (
        <div style={{ display: "flex" }}>
            {appliedJobs?.map((job) => (
                <InnerCard key={job.id} job={job} isSelecting={false} />
            ))}
        </div>
    )
}

export default Applied