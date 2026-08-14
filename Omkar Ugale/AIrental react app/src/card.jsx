import React from 'react'

const Card = ({ job }) => {

  return (
    <div className="job-card">

      {/* Header */}

      <div className="job-card-header">

        <div className="company-logo">

          {job.logo.startsWith("data:image") ? (
            <img
              src={job.logo}
              alt={job.company}
            />
          ) : (
            <span>{job.logo}</span>
          )}

        </div>

        <button className="save-btn">
          Save
          <span className="bookmark-icon">♡</span>
        </button>

      </div>


      {/* Job Information */}

      <div className="job-info">

        <div className="company-name">
          {job.company}

          <span className="posted-time">
            {job.posted}
          </span>
        </div>

        <h2 className="job-title">
          {job.title}
        </h2>

        <div className="job-tags">

          <span className="job-tag">
            {job.type}
          </span>

          <span className="job-tag">
            {job.level}
          </span>

        </div>

      </div>


      {/* Footer */}

      <div className="job-card-footer">

        <div className="job-location">

          <div className="salary">
            {job.salary}
          </div>

          <div className="location">
            {job.location}
          </div>

        </div>

        <button className="apply-btn">
          Apply now
        </button>

      </div>

    </div>
  )
}

export default Card