const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const app = express()
const port = 4000

const schema = buildSchema(`
  type Query {
    message: String
  }
`)

const root = {
  message: () => 'Hello World !',
}

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
)

app.listen(port, () => console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`))
