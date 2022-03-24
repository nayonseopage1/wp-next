import React from 'react';
import { useRouter } from 'next/router';
import {
    gql
  } from "@apollo/client";
import { client } from '../../src/inc/apploClient';




const ServiceDetail2 = ({data}) => {
    console.log(data)
    const router = useRouter();
    const { slug } = router.query;

    return (
            <div className='service-Item'>
              <h2>service page detail</h2>
                <h1>Url : { slug}</h1> 
            </div>
    );
};

export async function getStaticProps({ params }) {
    let { slug } = params;

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
        `,
        variables: { slug }
    });

    return {
        props: {
            data
        }
    };
}

export async function getStaticPaths() {

    const { data } = await client.query({
        query: gql`
        query ServiceQuery($slug: ID!){
            ServicePageQuery: pageBy(uri: "https://seia.internaltest.website/services/") {
            servicePage(id: $slug, idType: slug) {
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

    const pathsData = [];

    data.ServicePageQuery.servicePage.serviceRep.map((service) => {
        pathsData.push({ params: { slug: `${service.slug}` } });
    });

    //const pathsData = [];
    //data.ServicePageQuery.servicePage.serviceRep.forEach((post) => pathsData.push(`${post.slug}`));

    return {
        paths: pathsData,
        fallback: true
    };
}



export default ServiceDetail2;