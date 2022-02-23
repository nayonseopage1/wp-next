import {
    gql
  } from "@apollo/client";
import { client } from "./apploClient";

  const helpData = async() => {
        const HelpPageData = await client.query({
        query: gql`
            query HelpQuery {
                HelpPage : pageBy(uri: "https://seia.internaltest.website/help/") {
                HelpPage {
                    helpTitle
                    helpContent
                }
                }
            }    
        `
        })
        return HelpPageData;
  }
  
  export default helpData;