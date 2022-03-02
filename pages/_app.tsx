import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";

import client from "@lib/apollo";
import "@styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<ApolloProvider client={client}>
			<SessionProvider session={session}>
				<div className="App">
					<Component {...pageProps} />
				</div>
			</SessionProvider>
		</ApolloProvider>
	);
}

export default MyApp;
