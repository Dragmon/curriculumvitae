import React from "react";

const Experience = (props) => (
    <div className="Experience">
        <div className="Experience-container">
            <h3>Experiencia</h3>
            {props.data.map((exp, index) => (
                <div className="Experience-item" key={`Exp-${index}`}>                    
                    <p>Compañia: {exp.company} {exp.startDate} - {exp.endDate}</p>
                    <p>{exp.jobTitle}</p>
                    <p>{exp.jobDescription}</p>
                </div>
            ))}            
        </div>
    </div>
);

export default Experience;