import {
    gql
  } from "@apollo/client";
import { client } from "./apploClient";

  const footerData = async() => {
        const FooterPageData = await client.query({
        query: gql`
                query FooterQuery {
                    FooterPage : pageBy(uri: "https://seia.internaltest.website/footer/") {
                    footer {
                        footerarea {
                        footerTitle
                        footerContent
                        }
                    }
                    }
                }         
        `
        })
        return FooterPageData;
  }
  
  export default footerData;