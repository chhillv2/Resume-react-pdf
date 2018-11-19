import React from 'react';
import moment from 'moment';

const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
          enddate = moment(props.workItemData.endDate).format('MMM, YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getHighlights = props.workItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });
    

    return (
        <div className="workItem">
          <h3>{props.workItemData.position}, <span>{props.workItemData.company}</span></h3>
          <p className="workDates">{getWorkDates()}</p>
          <p>{props.workItemData.summary}</p>
          <p>{props.workItemData.summary1}</p>
          <p>{props.workItemData.summary2}</p>
          <p>{props.workItemData.summary3}</p>
          <p>{props.workItemData.summary4}</p>
          <p>{props.workItemData.summary5}</p>
          <p>{props.workItemData.summary6}</p>
          <p>{props.workItemData.summary7}</p>


          <ul>{getHighlights}</ul>
        </div>
    )
};

export default WorkItem;
