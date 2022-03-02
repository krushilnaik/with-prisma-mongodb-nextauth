import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";

import Header from "@components/Header";
import client from "@lib/apollo";
import "@styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<ApolloProvider client={client}>
			<SessionProvider session={session}>
				<Header />
				<Component {...pageProps} />
			</SessionProvider>
		</ApolloProvider>
	);
}

export default MyApp;
