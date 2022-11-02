// Communicating with Countries GraphQL API, available at https://github.com/trevorblades/countries
// Documentation for queries: https://trevorblades.github.io/countries/queries/continent

import {gql} from "apollo-angular"
import {countryData, countryDataVariables, singleCountryData} from "../shared/countries.interface";

// Get a list of all countries (200+!)
// These queries demonstrate the use of nested properties.
// Each propertY (for instance: languages{}) is also an array which has
// key-value pairs. See API documentation for details
const GET_ALL_COUNTRIES = gql`
query getAllCountries {
  countries {
    edges {
      node {
        name
        capital
        flag
        languages{
          edges{
            node{
              name
            }
          }
        }
      }
    }
  }
}
`
// Using Generics on the queries here, to obtain type safety.
// See https://www.the-guild.dev/graphql/apollo-angular/docs/development-and-testing/using-typescript
// for details.
// We also use a GraphQL 'DIRECTIVE', in order to include the flag or not, based
// on the state of the UI.
// See https://graphql.org/learn/queries/#directives for details.
const GET_COUNTRIES_BY_NAME = gql<countryData, countryDataVariables>`
query getCountriesByName($name: String!, $includeFlag: Boolean = true){
  countries(name_Istartswith: $name) {
   edges {
      node {
        name
        capital
        languages{
          edges{
            node{
              name
            }
          }
        }
        flag @include(if: $includeFlag)
      }
    }
  }
}
`

// Get a single country, based on country name (which acts as its 'id')
const GET_COUNTRY = gql<singleCountryData, countryDataVariables>`
  query getCountry($name: String!){
     countries(name_Icontains: $name) {
      edges {
        node {
          name
          capital
          languages{
            edges{
              node{
                name
              }
            }
          }
          flag
          region
          subregion
          population
        }
      }
    }
  }
`


export {GET_ALL_COUNTRIES, GET_COUNTRY, GET_COUNTRIES_BY_NAME}
