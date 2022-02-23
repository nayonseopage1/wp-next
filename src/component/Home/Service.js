import React from 'react';

const Service = ({hmOutput}) => {
  
    const serviceLoop = hmOutput.serviceSec;
    return (

        <div className='service-main-section'>
            <div className='service-title'>
                <h2>Our Services</h2>
            </div>
            <div className='service-content-area'>
            {
                serviceLoop.map((serviceItem,index) =>{
                    return(
                        <div key={index} className='service-main-area'>
                            <img src={serviceItem.serviceImage.sourceUrl} />
                            <h3>{serviceItem.serviceTitle}</h3>
                            <p>{serviceItem.serviceContent}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Service;