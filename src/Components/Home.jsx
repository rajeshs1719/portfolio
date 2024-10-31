import React from 'react';
import ladyImg from '../Images/Lady.avif';
// import PropTypes from "prop-types";
const imageAltTxtF="Lady Professional Image";
const Home=({name,title})=> {
  return (
    <div>
      <section id="home" className="min-height">
        <img src={ladyImg} alt={imageAltTxtF} className="background" />
        <div 
        style={{
            position:"absolute",
            top:"5rem",
            left:"2rem",
            width:"17rem"
        }}
        >
            <h1>{name}</h1>
            <h2>{title}</h2>
        </div>
        {/* <div
        style={{
            position:"absolute",
            bottom:"3rem",
            left:"50%"
        }}
        >
            <img src= alt="" />
        </div> */}
      </section>
    </div>
  )
}
Home.defaultProps={
    name:"",
    title:"",
};
export default Home
