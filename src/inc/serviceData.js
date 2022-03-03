import {
    gql
  } from "@apollo/client";
import { client } from "./apploClient";

  const serviceData = async() => {
        const ServicePageData = await client.query({
        query: gql`
                query serData($id: ID!) {
                    HomePage: pageBy(uri: "https://seia.internaltest.website/home/") {
                    aboutSection {
                        serviceSec(id: $id) {
                            id
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
        return ServicePageData;
  }
  
  export default serviceData;