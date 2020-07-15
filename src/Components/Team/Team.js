import React from 'react';
import VickyImg from '../Images/Me.jpg';
import AaronImg from '../Images/Me.jpg';
import ElenaImg from '../Images/Me.jpg';
import './Team.css';
import SocialMedia from '../Header/SocialMedia';
import MyCard from '../Card/Card';


export default function Team() {
    return (
        <div className="Team" id="Team">
            <div className="row">

                <SocialMedia
                    name="Aaron Hawthorne"                     
                />
            </div>
        </div>
    )
}