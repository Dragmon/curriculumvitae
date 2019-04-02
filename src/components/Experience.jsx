import React from "react";
import H2Styled from '../styles/H2Styled';
import H3Styled from '../styles/H3Styled';
import PStyled from '../styles/PStyled';

const Experience = (props) => (
    <div className="Experience">
        <H2Styled name="Experiencia"/>
        <div className="Experience-container">
            {props.data.map((exp, index) => (
                <div className="Experience-item" key={`Exp-${index}`}>
                    <H3Styled>
                        Compañia: {exp.company} {exp.startDate} - {exp.endDate}
                    </H3Styled>                    
                    <PStyled name={exp.jobTitle}/>
                    <PStyled name={exp.jobDescription} />
                </div>
            ))}            
        </div>
    </div>
);

export default Experience;