import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Spring Boot",
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "SQL",
    "PostgreSQL"
];

const labelsSecond = [
    "Docker",
    "GitHub Actions",
    "Git",
    "AWS",
    "Azure",
    "Render",
    "Vercel"
];

const labelsThird = [
    "Python",
    "Selenium",
    "Jest",
    "Testing-Library",
    "Postman",
    "REST APIs"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Web Development</h3>
                        <p>I have experience in both backend and frontend development, building applications from scratch. I have worked with robust and scalable architectures using technologies like Spring Boot, Angular, and React.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps & CI/CD</h3>
                        <p>I automate processes and deployments to ensure quality and speed in software delivery. I configure Continuous Integration and Continuous Deployment (CI/CD) pipelines using containers and cloud workflows.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>QA Automation & Testing</h3>
                        <p>I am passionate about software quality. I develop automated tests and integrate modern QA methodologies to ensure complex systems and REST APIs work flawlessly during all of the lifecycle of the project.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;