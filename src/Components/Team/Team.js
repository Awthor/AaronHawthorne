import React from 'react';
import './Team.css';
import SocialMedia from '../Header/SocialMedia';
import ScrollDialog from "../AboutMe/AboutMe"


export default function Team() {
    return (
        <div className="Team" id="Team">
            <div className="row">
                <SocialMedia item xs={false} sm={2}/>
            </div>
            <div className="row1">
                <ScrollDialog item xs={false} sm={2}/>
            </div>
        </div>
    )
}