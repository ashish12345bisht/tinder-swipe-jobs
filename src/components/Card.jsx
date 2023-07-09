import React, { useEffect, useState } from 'react';
import '../styles/card.css';
import { useSelector, useDispatch } from 'react-redux'
import { apply, reject } from '../redux/reducers/jobs';
import InnerCard from './InnerCard';

const Card = () => {
    const [dragStartX, setDragStartX] = useState(0);
    const [visible, setVisible] = useState([])
    const { alljobs, jobs, appliedJobs, rejectedJobs } = useSelector(state => state.jobsSlice);
    const dispatch = useDispatch()

    useEffect(() => {
        setVisible(jobs.map((item) => 0))
    }, [])
    const handleDragStart = (event) => {
        setDragStartX(event.clientX);
    };

    const handleDragEnter = (event, id) => {
        event.stopPropagation();
        const currentX = event.clientX;
        if (currentX < dragStartX) {
            let tempVisible = visible
            let index = jobs.findIndex(item => item.id === id);
            tempVisible[index] = 1;
            setVisible([...tempVisible])
            setTimeout(() => {
                let tempRejectedJobs = [...rejectedJobs];
                let actionJob = jobs.find(item => item.id === id)
                tempRejectedJobs.push(actionJob);
                let tempJobs = jobs.filter(job => job.id !== id);
                dispatch(reject({ rejectedJobs: tempRejectedJobs, jobs: tempJobs }))
            }, 500)
            console.log('Dragged to the left');
        } else if (currentX > dragStartX) {
            let tempVisible = visible
            let index = jobs.findIndex(item => item.id === id);
            tempVisible[index] = 2;
            setVisible([...tempVisible])
            setTimeout(() => {
                let tempAppliedJobs = [...appliedJobs];
                let actionJob = jobs.find(item => item.id === id)
                tempAppliedJobs.push(actionJob);
                let tempJobs = jobs.filter(job => job.id !== id);
                dispatch(apply({ appliedJobs: tempAppliedJobs, jobs: tempJobs }))
            }, 500)
            console.log('Dragged to the right');
        }
    };

    return (
        <div className='main-container'>
            {jobs.map((job, ind) => (
                <InnerCard key={ind} ind={ind} handleDragStart={handleDragStart} handleDragEnter={handleDragEnter} setDragStartX={setDragStartX} visible={visible} job={job} />
            ))}
        </div>
    );
};

export default Card;
