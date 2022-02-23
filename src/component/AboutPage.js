import React from 'react';

const AboutPage = ({AboutPageData}) => {
    return (
        <div>
            <h2>{AboutPageData.aboutTitle}</h2>
            <p>{AboutPageData.aboutContent}</p>
            <img src={AboutPageData.aboutImage.sourceUrl} alt=""/>
        </div>
    );
};

export default AboutPage;


