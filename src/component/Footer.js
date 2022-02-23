import React from 'react';

const Footer = ({footerOutput}) => {
    const footerDataOP = footerOutput.data.FooterPage.footer.footerarea;
    
    return (
        <div className='footer-section'>
            <h2>{footerDataOP.footerTitle}</h2>
            <p>{footerDataOP.footerContent}</p>
        </div>
    );
};

export default Footer;


