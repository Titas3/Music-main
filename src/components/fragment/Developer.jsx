import React from 'react';
import '../assets/scss/Developer.scss';
// import {IconButton} from "@material-ui/core";
// import AvatarImage from "../assets/img/avatar.jpg";
// import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    {/* <img src={AvatarImage} alt="Profile"/> */}
                    <div className={"Card-details"}>
                        <h3>Titas Chowdhury</h3>
                        <p>Frontend developer</p>
                        
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A frontend developer trainee at Relevel by Unacademy, Bangalore</p>
                    
                    
                </div>

            </div>
        </div>
    );
}

export default Developer;