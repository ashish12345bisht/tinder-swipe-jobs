import React from 'react'

const InnerCard = ({ handleDragStart = () => { }, ind = 0, handleDragEnter = () => { }, setDragStartX = () => { }, visible = [], job = {}, isSelecting = true }) => {
    return (
        <div
            draggable
            onDragStart={handleDragStart}
            onDragEnter={(e) => handleDragEnter(e, job.id)}
            onDragEnd={() => setDragStartX(0)}
            className={`${visible[ind] === 1 ? "drag-left" : visible[ind] === 2 ? "drag-right" : ""} ${isSelecting ? "sticky-position" : ""}`}
        >
            <div
                className='card'
            >
                <h2 className='text-lg'>{job?.title || "NA"}</h2>
                <h4 className='text-sm'>{job?.company || "NA"}</h4>
                <div className=''>
                    <span>{job?.location || "NA"}</span>
                    <span className='text-sm'>{job?.salary || "NA"}</span>
                </div>
                <p className='text-sm truncate ...'>{job?.description?.slice(0, 150) + "..."}</p>
            </div>
        </div>
    )
}

export default InnerCard