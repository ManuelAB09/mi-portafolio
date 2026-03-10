import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faAward } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History & Experience</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2026 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">QA Engineer Intern in CCC company</h3>
            <h4 className="vertical-timeline-element-subtitle">Seville, Spain</h4>
            <p>
              Test Automation, CI/CD Pipelines, Quality Assurance, and modern software testing methodologies.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Jun 2026"
            iconStyle={{ background: '#e91e63', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.S. in Software Engineering (Graduation)</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Seville (ETSII)</h4>
            <p>
              Graduated with a strong foundation in software architecture, automated testing, and backend development.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Jan 2024"
            iconStyle={{ background: '#ff9800', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faAward} />}
          >
            <h3 className="vertical-timeline-element-title">Highest Honors (Matrícula de Honor)</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Seville (ETSII)</h4>
            <p>
              Awarded Highest Honors in <b>Software Design and Testing I</b> (for the web game project "Pandemic") and <b>Computer Networks</b>.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 - Sep 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Lifeguard & Emergency Responder</h3>
            <h4 className="vertical-timeline-element-subtitle">Agua Mágica, Seville</h4>
            <p>
              Surveillance, risk prevention, and emergency response in aquatic facilities. Strong focus on quick decision-making under pressure and public safety.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Event Operations Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Plaza de Toros de la Maestranza, Seville</h4>
            <p>
              Access management, customer service, and logistics support in massive events. Developed strong teamwork and incident resolution skills.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sept 2022"
            iconStyle={{ background: '#e91e63', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Started B.S. in Software Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Seville (ETSII)</h4>
            <p>
              Began pursuing my degree with a focus on software architecture, automated testing, and backend development.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;