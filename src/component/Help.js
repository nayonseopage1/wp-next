import React from 'react';

const Help = ({helpPageData}) => {
    return (
        <div className='help-page-area'>
            <h2>{helpPageData.helpTitle}</h2>
            <p>{helpPageData.helpContent}</p>
        </div>
    );
};

export default Help;