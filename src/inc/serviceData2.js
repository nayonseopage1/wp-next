import {
    gql
  } from "@apollo/client";
import { client } from "./apploClient";

  const serviceData2 = async() => {
        const ServicePageData2 = await client.query({
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
        })
        return ServicePageData2;
  }
  
  export default serviceData2;