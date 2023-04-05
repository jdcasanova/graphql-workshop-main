import { ApolloServer } from "apollo-server";

import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";

// Crear instancia de Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Iniciar servidor
server.listen().then(({ url }) => {
  console.log(`Servidor iniciado en ${url}`);
});
