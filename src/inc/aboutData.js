import {
    gql
  } from "@apollo/client";
import { client } from "./apploClient";

  const aboutData = async() => {
        const AboutPageData = await client.query({
        query: gql`
        query AboutData {
            AboutPage: pageBy(uri: "https://seia.internaltest.website/about-us/") {
              aboutPage {
                aboutContent
                aboutTitle
                aboutImage {
                  sourceUrl
                }
              }
            }
          }       
        `
        })
        return AboutPageData;
  }
  
  export default aboutData;