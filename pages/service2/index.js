import React from 'react';
import {
    gql
  } from "@apollo/client";
import { client } from '../../src/inc/apploClient';
import getNavData from '../../src/inc/getNavData';
import footerData from '../../src/inc/footerData';
import Layout from '../../src/component/Layout';
import Footer from '../../src/component/Footer';
import Link from 'next/link';

const services2 = ({data,headerMenu,footerOutput}) => {
    
    const serviceLoop = data.ServicePageQuery.servicePage.serviceRep;
    return (
        <Layout headerMenu={headerMenu}>
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
                            <Link href={'/service2/' + serviceItem.slug}>
                              <a>Read More</a>
                          </Link> 
                        </div>
                    )
                })
            }
            </div>
        </div>
        <Footer footerOutput={footerOutput} ></Footer>
        </Layout>
    );
};

export async function getStaticProps() {
    
    const { data } = await client.query({
        query: gql`
                query ServiceQuery {
                    ServicePageQuery: pageBy(uri: "https://seia.internaltest.website/services/") {
                    servicePage {
                        serviceRep {
                        slug
                        serviceTitle
                        serviceContent
                        serviceImage {
                            sourceUrl
                        }
                        }
                    }
                    }
                }              
        `
    });

    return {
        props: {
             data,
             headerMenu : await getNavData(),
             footerOutput : await footerData()
        }
    };
}



export default services2;