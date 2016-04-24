import { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLBoolean} from 'graphql';

let count = 0;
let bagOption = true;

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: { 
      count: {
        type: GraphQLInt,
        resolve: () => {
          return count;
        }
      },
      withBags: {
        type: GraphQLBoolean,
        resolve: () => {
          return bagOption;
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateBags: {
        type: GraphQLBoolean,
        description: 'Updates the bag option',
        resolve: () => {
          bagOption = !bagOption;
          return bagOption;
        }
      }
    }
  })
});

export default schema;
