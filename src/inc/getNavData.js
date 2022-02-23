import {
    gql
  } from "@apollo/client";
import { client } from "./apploClient";


  const getNavData = async() => {
        const navData = await client.query({
        query: gql`
            query HeaderMenuItems {
                HeaderItems : menuItems(where: {location: PRIMARY}) {
                    edges {
                        node {
                            id
                            label
                            path
                        }
                    }
                }
            }     
        `
        })
        return navData;
  }
  
  export default getNavData;