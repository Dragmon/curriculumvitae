import React from "react";

const Skills = (props) => (
    <div className="Skills">
        <div className="Skills-container">
            <h3>Skills</h3>
            {props.data.map((skill, index) => (
                <div className="Skills-item" key={`Skills-${index}`}>                    
                    <h5>{skill.name}</h5>
                    <div className="Skills-line"></div>
                    <p>{skill.percentage}</p>
                </div>
            ))}            
        </div>
    </div>
);

export default Skills;