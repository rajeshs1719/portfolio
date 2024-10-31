import React from 'react';
import PropsTypes from 'prop-types';  

import devdottoicon from '../Images/Social/DevDetto.png'
import envelopicon from '../Images/Social/Mail.png'
import gitHubIcon from '../Images/Social/GitHub.png'
import instagramicon from '../Images/Social/Instagram.png'
import linkedinicon from '../Images/Social/Linkedin.png'
import mediumIcon from '../Images/Social/Medium.png'
import twiitericon from '../Images/Social/Twitter.png'
import youTubeicon from '../Images/Social/youtube.png'
const Footer=(props,name)=> {
    const {
        devDotTo,
        email,
        gitHub,
        instagram,
        linkedIn,
        medium,
        twitter,
        youTube,
    }=props;
  return (
    <div id="footer" 
    style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:"2.5rem",
       padding:"5rem 0 3rem",
       backgroundColor: 'blue',
       width:"100vw" 
    }}>
      <div 
      style={{
        display:"flex",
        justifyContent:"center",
        gap:"2.5rem",
      }}
      >
        {email && (
            <a href={`mailto:${email}`}>
                <img src={envelopicon} alt="email" className='socialIcon'/>
            </a>
        )}
        {gitHub && (
            <a href={`https://github.com/${gitHub}`} target='_blank' rel='noopener noreferrer'>
                <img src={gitHubIcon} alt="GitHub" className='socialIcon' />
            </a>
        )}
        {devDotTo && (
            <a href={`https://dev.to/${devDotTo}`} target='_blank' rel='noopener noreferrer'>
                <img src={devdottoicon} alt="Dev.to" className="socialIcon" />
            </a>
        )}
        {instagram &&(
            <a href={`https://instagram.com/${instagram}`} target='_blank' rel='noopener noreferrer'>
                <img src={instagramicon} alt="instagram.com" className="socialIcon" />
            </a>
        )}
        {medium &&(
            <a href={`https://medium.com/@${medium}`} target='_blank' rel='noopener noreferrer'>
                <img src={mediumIcon} alt="medium.com" className="socialIcon" />
            </a>
        )}
        {linkedIn &&(
            <a href={`https://www.linkedin.com/in/${linkedIn}`} target='_blank' rel='noopener noreferrer'>
                <img src={linkedinicon} alt="linkedin.com" className="socialIcon" />
            </a>
        )}
        {twitter &&(
            <a href={`https://x.com/${twitter}`} target='_blank' rel='noopener noreferrer'>
                <img src={twiitericon} alt="x.com" className="socialIcon" />
            </a>
        )}
        {youTube &&(
            <a href={`https://www.youtube.com/c/${youTube}`} target='_blank' rel='noopener noreferrer'>
                <img src={youTubeicon} alt="youTube.com" className="socialIcon" />
            </a>
        )}
      </div>
      <p className="small" style={{marginTop:0, color:"white"}}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultPprops={
    name:"",
};

Footer.PropsTypes={
    devDotTo:PropsTypes.string,
    email:PropsTypes.string,
    gitHub:PropsTypes.string,
    instagram:PropsTypes.string,
    medium:PropsTypes.string,
    linkedIn:PropsTypes.string,
    name:PropsTypes.string.isRequired,
    twitter:PropsTypes.string,
    youTube:PropsTypes.string,
};

export default Footer
