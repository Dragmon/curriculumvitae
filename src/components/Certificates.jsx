import React from "react";

const Certificate = (props) => (
    <div className="Certificate">
        <div className="Certificate-container">
            <h3>Certificados</h3>
            {props.data.map((cert, index) => (
                <div className="Certificate-item" key={`Cert-${index}`}>
                    <p>{cert.name} {cert.date} {cert.institution}</p>
                    <p>{cert.description}</p>
                </div>
            ))}            
        </div>
    </div>
);

export default Certificate;