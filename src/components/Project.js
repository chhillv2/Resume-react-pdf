import React from 'react';

const Project = props => {
    return (
      <section className="workItem">

      <h2 className="text-uppercase"><i className="fa fa-book"></i> Projects</h2>
        <p>{props.ProjectData}</p>
        <p>{props.ProjectData1}</p>
        <p>{props.ProjectData2}</p>
        <p>{props.ProjectData3}</p>
        <p>{props.ProjectData4}</p>
        <p>{props.ProjectData5}</p>

      </section>
    );
};

export default Project;
