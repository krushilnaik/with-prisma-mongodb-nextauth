import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";

import Header from "@components/Header";
import client from "@lib/apollo";
import "@styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<ApolloProvider client={client}>
				<Header />
				<Component {...pageProps} />
			</ApolloProvider>
		</SessionProvider>
	);
}

export default MyApp;
