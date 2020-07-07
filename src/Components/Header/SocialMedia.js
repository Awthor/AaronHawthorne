import React from 'react';

export default function SocialMedia({ linkedIn, github, email }) {
    return (
        <div className="TeamMember">
            <div className="teamContainer">
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-envelope-square fa-4x"></i></a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square fa-4x"></i></a>
                <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square fa-4x"></i></a>
            </div>
        </div>
    );
}