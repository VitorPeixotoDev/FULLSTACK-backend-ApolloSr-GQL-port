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
    },
    Mutation: {
        addPost: (_, { title, description, image, author}) => {
            const newPost = {
                id: posts.length +1,
                title: title,
                description: description,
                author: author,
                image: image,
                likes: 0,
                createdAt: new Date().toISOString()
            }
            posts.push(newPost)
            return newPost
        },
        deletePost: (_, { id }) => {
            const index = posts.findIndex(post => post.id === id)
            if(index === -1) return false
            posts.splice(index, 1)
            return true
        },
        likePost: (_, { id }) => {
            const index = posts.findIndex(post => post.id === id)
            if(index === -1) return false
            posts[index].likes++
            return true
        }
    }
}

module.exports = resolvers