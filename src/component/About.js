import React from 'react';

const About = ({hmOutput}) => {
    
    return (
        <div className='banner-sec'>
            <div className='banner-content'>
                <h1>{hmOutput.bannerHome.bannerTitle}</h1>
                <p>{hmOutput.bannerHome.bannerContent}</p>
            </div>
            <div className='banner-content'>
                <img src={hmOutput.bannerHome.bannnerImage.sourceUrl} />
            </div>
        </div>
        
    );
};

export default About;