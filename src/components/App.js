import React, { PropTypes } from 'react';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Project from './Project';

const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;
  const ProjectData = profileData.Project
  const ProjectData1 = profileData.Project1
  const ProjectData2 = profileData.Project2
  const ProjectData3 = profileData.Project3
  const ProjectData4 = profileData.Project4
  const ProjectData5 = profileData.Project5


  return (
          
          <div className="container">
            <div className="row">
              <aside className="col-md-4">
                <div className="inner">
                  <Profile profileData={profileData} />
                  <About aboutData={aboutData} />
                  <Education educationData={educationData} />
                </div>
                
                
              </aside>
              <main className="col-md-8">
                <div className="inner">
                  <Work workData={workData} />
                  <Project ProjectData={ProjectData} 
                           ProjectData1={ProjectData1}
                           ProjectData2={ProjectData2} 
                           ProjectData3={ProjectData3} 
                           ProjectData4={ProjectData4} 
                           ProjectData5={ProjectData5} 

                  />
                                  <Skills skillsData={skillsData} />

                </div>
                <div className="inner">
                  
                </div>
              </main>
            </div>
          </div>
    )
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
