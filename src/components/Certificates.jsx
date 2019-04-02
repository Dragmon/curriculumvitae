import React from "react";
import H2Styled from '../styles/H2Styled';
import H3Styled from '../styles/H3Styled';
import Pstyled from "../styles/PStyled";

const Certificate = (props) => (
    <div className="Certificate">
        <H2Styled name="Certificados"/>
        <div className="Certificate-container">
            {props.data.map((cert, index) => (
                <div className="Certificate-item" key={`Cert-${index}`}>
                    <H3Styled>
                        {cert.name} {cert.date} {cert.institution}
                    </H3Styled>
                    <Pstyled name={cert.description}/>                    
                </div>
            ))}            
        </div>
    </div>
);

export default Certificate;