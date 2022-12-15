import 'dotenv/config'
import type { GatsbyConfig } from 'gatsby'

console.log(process.env.GATSBY_API_URL)

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'gatsbytest',
        siteUrl: 'https://www.yourdomain.tld'
    },
    plugins: [
        {
            resolve: 'gatsby-transformer-sharp'
        },
        {
            resolve: 'gatsby-plugin-env-variables',
            options: {
                allowList: ['GATSBY_API_URL']
            }
        }
    ],
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true
}

export default config
