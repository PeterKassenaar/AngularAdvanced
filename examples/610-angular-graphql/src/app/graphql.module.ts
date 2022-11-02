import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

const uri = 'https://graphql.country/graphql'; // <-- add the URL of the GraphQL server here
const uriCountries = 'https://countries.trevorblades.com/' // another GraphQL-countries API. Experiment with it if you want

// If you want to use multiple endpoints:
// Check https://stackoverflow.com/questions/56212486/connect-an-angular-app-to-multiple-apollo-clients

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
