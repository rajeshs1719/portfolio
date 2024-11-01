import React from 'react'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <a href="#">
                            <i className="fa fa-google-plus-square"></i>
                        </a>
                        <a href="https://github.com/rajeshs1719">
                            <i className="fa fa-github-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rajesh-s-344ab4287/">
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Ehiedu</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                Web Developer
                            </h1>
                            <span className="profile-role-tagline">
                                Like to solve the technical problem, and build application with front end operation.
                            </span>
                        </span>
                    </div>
                    <div className="profile-optins">
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="Resume.pdf" download='Rajesh Resume.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
