const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Post {
        id: Int!
        title: String
        description: String
        author: String
        image: String
        likes: Int
        createdAt: String
    }

    type Query {
        posts: [Post]
    }
`

const posts = [
    {
        id: 1,
        title: 'The Awakening',
        description: 'this is a post',
        author: 'Kate Chopin',
        image: 'https://res.cloudinary.com/dety84pbu/image/upload/v1598457117/spaceSuite_knkmu8.jpg',
        likes: 0,
        createdAt: '2020-06-01T00:00:00.000Z'
      },
      {
        id: 2,
        title: 'City of Glass',
        description: 'this is a post',
        author: 'Paul Auster',
        image: 'https://res.cloudinary.com/dety84pbu/image/upload/v1598475110/catstrophysicist_bqfh9n.jpg',
        likes: 2368,
        createdAt: '2020-06-01T00:00:00.000Z'
      },
]

const resolvers = {
    Query: {
        posts: () => posts
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`)
})