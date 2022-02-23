import {
    gql
  } from "@apollo/client";
import { client } from "./apploClient";

  const homeData = async() => {
        const HomePageData = await client.query({
        query: gql`
                query HmeData {
                    HomePage: pageBy(uri: "https://seia.internaltest.website/home/") {
                    aboutSection {
                        bannerHome {
                            bannerTitle
                            bannerContent
                            bannnerImage {
                                sourceUrl
                            }
                        }
                        serviceSec {
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
        return HomePageData;
  }
  
  export default homeData;