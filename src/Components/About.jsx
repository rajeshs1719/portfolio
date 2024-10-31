import React from 'react'
import imageTexture from '../Images/Background_texture.webp'

const ImageAltText="White Texture background";
const descripption="I'm a ui/ux student at some place and studying under some unviversity etc... etc..";
const skillsset=[
  "web designing",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interface",
  "Graphic design"
];
const detailorQuote="I am passionate in solving problems in new creative ways by leveraging effort"

const About = () =>{
  return(
    <section className="padding" id="about">
      <img src={imageTexture} alt={ImageAltText} className='background' id='texture'/>
      <div
      style={{
        background:"white",
        width:"50%",
        padding:"1rem",
        margin:"3rem auto",
        textAlign:"center",
      }}
      >
        <h2>About Myself</h2>
        <p className="large">{descripption}</p>
        <hr />

        <ul
        style={{
          textAlign:"left",
          columns:2,
          fontSize:"1.25rem",
          margin:"2rem 3rem",
          gap:"3rem",
        }} className='overlay-text'
        >
          {skillsset.map((skills)=>(
            <li key={skills}>{skills}</li>
          ))}
        </ul>
        <hr />
        <p style={{padding:"1rem 3 rem 0",}}>{detailorQuote}</p>
      </div>

    </section>
  );
};

export default About;
