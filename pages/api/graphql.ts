import { ApolloServer } from "apollo-server-micro";
import { GraphQLSchema } from "graphql";
import Cors from "micro-cors";
import { createContext as context } from "../../graphql/context";
import { schema } from "../../graphql/schema";

const cors = Cors();

const apolloServer = new ApolloServer({
	schema: schema as unknown as GraphQLSchema,
	context,
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
	if (req.method === "OPTIONS") {
		res.end();
		return false;
	}

	await startServer;

	await apolloServer.createHandler({
		path: "/api/graphql",
	})(req, res);
});

export const config = {
	api: {
		bodyParser: false,
	},
};
