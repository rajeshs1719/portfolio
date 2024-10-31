import React from "react";
import image from "../Images/Projects.avif";
const ImageAltText="Laptop and books"
const projectlist = [
  {
    title: "10 things to know about Azure Statis web apps ",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam inventore laboriosam laborum minima nobis ipsum ab iusto voluptate rerum.",
    url: "Links",
  },
  {
    title: "10 things to know about Azure Statis web apps ",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam inventore laboriosam laborum minima nobis ipsum ab iusto voluptate rerum.",
    url: "Links",
  },
  {
    title: "10 things to know about Azure Statis web apps ",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam inventore laboriosam laborum minima nobis ipsum ab iusto voluptate rerum.",
    url: "Links",
  },
  {
    title: "10 things to know about Azure Statis web apps ",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam inventore laboriosam laborum minima nobis ipsum ab iusto voluptate rerum.",
    url: "Links",
  },
];

const Portfolio = () => {
  return (
    <div>
      <section className="padding" id="portfolio">
        <h2 style={{ textAlign: "center" }}>Portfolio</h2>
        <div
          style={{ display: "flex", flexDirection: "row", padding: "3rem" }}>
            <div style={{maxWidth:"40%", alignSelf:"center"}}>
                <img src={image} alt={ImageAltText} style={{height:"90%", width:"90%", objectFit:"cover"}}/>
            </div>
            <div className="container">
                {projectlist.map((project)=>(
                    <div className="box" key={project.title}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <h3 style={{flexBasis:"40px"}}>{project.title}</h3>
                        </a>
                        <p className="small">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
