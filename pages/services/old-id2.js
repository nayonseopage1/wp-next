
import {
    gql,
    ApolloClient,
    InMemoryCache
  } from "@apollo/client";

  export const client = new ApolloClient({
    uri: 'https://seia.internaltest.website/graphql',
    cache: new InMemoryCache()
  });



const serviceDetail = (serviceOutput) => {

    return (
            <div>
                {serviceOutput.serviceTitle}
                {serviceOutput.serviceContent}
            </div>
    )
}


export const getServerSideProps = async (context) => {

    const result = await client.query({
        query: gql` 
              query serData($id: id!) {
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
            `,

        variables: {
          id: context.params.id
      }

    })

    return {
        props: {
            serviceSec: result.data.HomePage.aboutSection.serviceSec,
        },
    };
}

export default serviceDetail
